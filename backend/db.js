const sql = require("mssql");

const config = {
  user: 'your_sql_user',
  password: 'your_sql_password',
  server: 'localhost',
  database: 'bros_one_tech',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log("Connected to SQL Server");
    return sql;
  } catch (err) {
    console.error("DB connection failed:", err);
  }
}

module.exports = connectDB;
