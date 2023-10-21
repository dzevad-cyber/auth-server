console.time('Server startup time');
import app from './db/app/app';
import { dbConnect } from './db/mysql/sequelize/db.utils';

dbConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.timeEnd('Server startup time');
});
