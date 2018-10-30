DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(9,2) default 0,
  stock_quantity INT(10) default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dish Soap", "Cleaning Supplies", 4.79, 800);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carbon Monoxide Detector", "Electronics", 23.58, 254);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fake Security Camera 2-pack", "Home Decor", 24.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Garfield: A Tail of Two Kitties DVD 2 Disc set", "Entertainment", 189.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yankee Candle Premium Scented Candle", "Home Decor", 22.50, 325);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Life Size Male Mannequin Stainless Steel Fully Posable", "Misc", 214.99, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ethernet Cable 60 ft", "Electronics", 6.99, 1400);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hyperrealistic Latex Horse Mask", "Apparel", 49.79, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BEDAZZLER", "As Seen On TV", 39.99, 50000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Russian Nesting Dolls: Set of 4", "Home Decor", 28.29, 45);

