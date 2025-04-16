
import mysql from 'mysql2/promise'

// Create DB connection
export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0Iyana4feb*',
  database: 'blushup_db'
});

// db.connect((err) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });



