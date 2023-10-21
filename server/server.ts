console.time('Server startup time');
import express from 'express';
import { dbConnect } from './db/mysql/sequelize/db.utils';

const app = express();

dbConnect();

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.timeEnd('Server startup time');
});
