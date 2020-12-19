import dotenv from 'dotenv';
dotenv.config();

const { DB_MYSQL_USERNAME, DB_MYSQL_PASSWORD, DB_MYSQL_DATABASE, DB_MYSQL_HOST } = process.env;

const config = {
  development: {
    username: DB_MYSQL_USERNAME,
    password: DB_MYSQL_PASSWORD,
    database: DB_MYSQL_DATABASE,
    host: DB_MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  },
  test: {
    username: DB_MYSQL_USERNAME,
    password: DB_MYSQL_PASSWORD,
    database: DB_MYSQL_DATABASE,
    host: DB_MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  },
  production: {
    username: DB_MYSQL_USERNAME,
    password: DB_MYSQL_PASSWORD,
    database: DB_MYSQL_DATABASE,
    host: DB_MYSQL_HOST,
    dialect: 'mysql',
    operatorsAliases: 0,
  },
};

export default config;
