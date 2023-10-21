console.time('Server startup time');
import app from './app/app';
import dbSetup from './app/mysql/db.setup';
import { sequelize } from './app/mysql/db.create';

dbSetup(sequelize);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.timeEnd('Server startup time');
});
