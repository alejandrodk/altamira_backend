import { Sequelize } from 'sequelize';
import chalk from 'chalk';
import config from './config/sequelize.config';

const env = process.env.NODE_ENV;
const { username, password, database, ...options } = config[env];
export default class Database {
  constructor() {
    this.sequelize = new Sequelize(database, username, password, {
      ...options,
      logging: false,

    });
  }

  async init() {
    try {
      await this.sequelize.authenticate();
      console.log(chalk.blueBright('Connection to database has been established successfully'));
    } catch (error) {
      console.error(chalk.redBright('Unable to connect to the database'), error);
    }
  }
}
