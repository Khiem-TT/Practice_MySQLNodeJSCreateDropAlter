let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bncvznczvzz1411',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(err => {
    if (err) throw err.stack;
    console.log('Connect success');
});

let sqlCreate = "create table if not exists products(id int auto_increment primary key, name varchar(255), price int)";
connection.query(sqlCreate, (err, result) => {
    if (err) throw err;
    console.log('Create table success');
});

let sqlDrop = "drop table if exists products";
connection.query(sqlDrop, (err, result) => {
    if (err) throw err;
    console.log('Drop table success');
});

let sqlAlter = "alter table customer add column age int default 30";
connection.query(sqlAlter, (err, result) => {
    if (err) throw err;
    console.log('Alter table success');
});