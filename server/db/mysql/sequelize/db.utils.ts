import { Sequelize } from 'sequelize';
import { sequelize } from './db.init';

const createConnection = (sequelize: Sequelize) => {
  return () => {
    if (process.env.NODE_ENV === 'development') {
      sequelize
        .authenticate()
        .then(() => {
          console.log('Connection has been established successfully.');
        })
        .catch((error) => {
          console.error('Unable to connect to the database:', error);
        });
    } else {
      console.log('Invalid environment.', process.env.NODE_ENV);
    }
  };
};

export const dbConnect = createConnection(sequelize);
