console.time('Server boot time');
import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.timeEnd('Server boot time');
});
