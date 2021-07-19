CREATE DATABASE node_mysql_db;

use node_mysql_db;

CREATE TABLE IF NOT EXISTS `employees` (
   `id` BIGINT UNSIGNED AUTO_INCREMENT,
   `first_name` VARCHAR(255) NOT NULL,
   `last_name` VARCHAR(255) NOT NULL,
   `emil` VARCHAR(255) NOT NULL,
   `phone` VARCHAR(50) NOT NULL,
   `organization` VARCHAR(255) NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `salary` DECIMAL(11,2) UNSIGNED DEFAULT 0.00,
   `status` TINYINT UNSIGNED DEFAULT 0,
   `is_deleted` TINYINT UNSIGNED DEFAULT 0,
   `created_at` DATETIME NOT NULL,
   `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
)

show tables;

select * from employees

-- INSERT INTO `employees` (`first_name`, `last_name`,`emil`, `phone`, `organization`,`description`,`salary`, `status`, `is_deleted`,`created_at`)  VALUES ('BVS', 'venkat', 'bvsrao91@gmail.com', '118980808', 'Bajaj', 'Trainer' , '8797979.00', '1', '0', '2021-18-07 14:24:30');

-- INSERT INTO `node_mysql_db`.`employees` (`first_name`, `last_name`,`emil`, `phone`, `organization`,`description`,`salary`, `status`, `is_deleted`,`created_at`)  VALUES('BVS', 'venkat', 'bvsrao91@gmail.com', '118980808', 'Bajaj', 'Trainer' , '8797979.00', '1', '0', '2021-18-07 14:24:30');



