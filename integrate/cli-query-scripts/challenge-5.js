/*
  user input: name of table, name of column, search string
  logged data: all entries in the table who's column matches the search
*/

const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const DB_PATH = path.join(__dirname, '..', 'chinook.sqlite');

const db = new sqlite3.Database(DB_PATH);

const userInput = {
    table_name: process.argv[2],
    column: process.argv[3],
    search_string: process.argv[4]
};

// hint:  `... LIKE '%${userInput.searchString}%'`
const queryString = `SELECT * FROM ${userInput.table_name} WHERE ${userInput.column} LIKE '%${userInput.search_string}%'`;


db.all(queryString, (err, rows) => {
    if (err) {
        console.error(err);
    } else {
        console.log(rows);
    }

    db.close();
});