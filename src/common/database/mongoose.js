import mongoose from 'mongoose';
import chalk from 'chalk';
import { mongoConfig } from './config/mongo.config';

export default class MongoDb {
  async init() {
    try {
      await mongoose.connect(mongoConfig.host, {
        ...mongoConfig.options,
      });
      console.log(
          chalk.blueBright('Connection to mongodb has been established successfully'),
      );
    } catch (error) {
      console.error(chalk.redBright('Unable to connect to the mongodb database'), error);
    }
  }
}
