const mysql = require("mysql");
const inquirer = require("inquirer");

const db = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",
  password: "password",
  database: "bamazon_DB"
});

db.connect(function (err) {
  if (err) throw err;
  home();
})

function home() {
  db.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    for (i = 0; i < results.length; i++) {
      console.log(`
      Id: ${results[i].id}    Product Name: ${results[i].product_name}    Price: ${results[i].price}`);
    }
  });
  promptBam();
};

function promptBam() {
  db.query("SELECT * FROM products", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "choice",
          type: "input",
          message: "Enter the ID of the item you wish to purchase",
          validate: function (idNum) {
            if ((isNaN(idNum) === false) && (idNum > 0) && (idNum < results.length)) {
              return true;
            }
            console.log(`Invalid ID entered! Try again.`);
            return false;
          }
        },
        {
          name: "quantity",
          type: "input",
          message: "How many would you like to buy?",
          validate: function (idNum) {
            if (isNaN(idNum) === false) {
              return true;
            }
            console.log(`Please enter a number.`);
            return false;
          }
        }
      ])
      .then(function (answer) {
        // get the information of the chosen item
        var chosenProduct;
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === answer.choice) {
            chosenProduct = results[i];
          }
        }
        // var prodQuantity = chosenProduct.stock_quantity;
        // determine if bid was high enough
        if (parseInt(chosenProduct.stock_quantity) > parseInt(answer.quantity)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: (chosenProduct.stock_quantity - answer.quantity)
              },
              {
                id: chosenProduct.id
              }
            ],
            function (error) {
              if (error) throw err;
              console.log(`
              You have successfuly purchased ${answer.quantity} of ${chosenProduct.product_name}. 
              At $${chosenProduct.price} per, your total comes out to ${(answer.quantity * chosenProduct.price)}.
              We hope you enjoy your purchase!
              Item will ship within 48 hours
              No refunds`);
              home();
            }
          );
        }
        else {
          console.log(`
          Sorry! ${answer.quantity} is over the current amount of that item in stock. 
          We apologize for the inconvenience`);
          home();
        }
      });
  });
};
