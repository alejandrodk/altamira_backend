import dotenv from 'dotenv';
dotenv.config();

const { DB_MSSQL_USERNAME, DB_MSSQL_PASSWORD, DB_MSSQL_DATABASE, DB_MSSQL_HOST } = process.env;

const config = {
  user: DB_MSSQL_USERNAME,
  password: DB_MSSQL_PASSWORD,
  server: DB_MSSQL_HOST,
  database: DB_MSSQL_DATABASE,
};

export default config;
