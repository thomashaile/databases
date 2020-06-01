/*
  user input: table name, column to order by, ASC or DSC
  logged data: all columns from the given table, sorted as instructed by the user input
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
    table_name: process.argv[2],
    order_by: process.argv[3],
    sort: process.argv[4]
};

const queryString = `SELECT * FROM ${userInput.table_name} ORDER BY ${userInput.order_by} ${userInput.sort}`;

db.all(queryString, (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }

    db.close();
});