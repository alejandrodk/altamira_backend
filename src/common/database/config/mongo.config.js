import dotenv from 'dotenv';
dotenv.config();

const { MONGO_URL, MONGO_USER, MONGO_PASS, MONGO_DATABASE } = process.env;

export const mongoConfig = {
  host: MONGO_URL,
  options: {
    dbName: MONGO_DATABASE,
    auth: {
      user: MONGO_USER,
      password: MONGO_PASS,
    },
    useNewUrlParser: false,
  },
};
