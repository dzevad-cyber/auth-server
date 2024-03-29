import { Dialect, Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE!,
  process.env.MYSQL_USER!,
  process.env.MYSQL_PASSWORD!,
  {
    host: process.env.MYSQL_HOST,
    dialect: process.env.DB_DIALECT as Dialect,
    logging: false,
  }
);
