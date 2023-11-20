var sqlite3 = require("sqlite3").verbose();
const DBSOURCE = "expensedb.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE expense (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         item text, 
         amount real, 
         category text, 
         location text, 
         spendOn text, 
         createdOn text 
         )`,
      (err) => {
        if (err) {
          console.log(err);
        } else {
          var insert =
            "INSERT INTO expense (item, amount, category, location, spendOn, createdOn) VALUES (?,?,?,?,?,?)";

          db.run(insert, [
            "Pizza",
            10,
            "Food",
            "KFC",
            "2020-05-26 10:10",
            "2020-05-26 10:10",
          ]);
          db.run(insert, [
            "Pizza",
            9,
            "Food",
            "Mcdonald",
            "2020-05-28 11:10",
            "2020-05-28 11:10",
          ]);
          db.run(insert, [
            "Pizza",
            12,
            "Food",
            "Mcdonald",
            "2020-05-29 09:22",
            "2020-05-29 09:22",
          ]);
          db.run(insert, [
            "Pizza",
            15,
            "Food",
            "KFC",
            "2020-06-06 16:18",
            "2020-06-06 16:18",
          ]);
          db.run(insert, [
            "Pizza",
            14,
            "Food",
            "Mcdonald",
            "2020-06-01 18:14",
            "2020-05-01 18:14",
          ]);
        }
      }
    );
  }
});

module.exports = db;
