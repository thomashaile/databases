/*
  user input: table name, column name, search string, number of entries
  logged data: return a given number of rows matching the search parameter
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
    table_name: process.argv[2],
    column: process.argv[3],
    search: process.argv[4],
    number_entries: process.argv[5]

};

const queryString = `SELECT * FROM ${userInput.table_name} WHERE ${userInput.column}
 LIKE '%${userInput.search}%' LIMIT ${userInput.number_entries}`;

db.all(queryString, (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }

    db.close();
});