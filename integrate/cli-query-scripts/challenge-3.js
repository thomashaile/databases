/*
  user input: column to order by, ASC or DSC
  logged data: all columns from the invoices table, sorted as instructed by the user input
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
    order_by: process.argv[2],
    sort: process.argv[3]
};

const queryString = `SELECT * FROM invoice ORDER BY ${userInput.order_by} ${userInput.sort}`;


db.all(queryString, (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }

    db.close();
});