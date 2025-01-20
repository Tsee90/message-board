const express = require('express');
const app = express();
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const newRouter = require('./routes/newRouter');
const { body, validationResult } = require('express-validator');

const dbenv = require('./db/dbenv');
dbenv.init();

const populatedb = require('./db/populatedb');
populatedb.main();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', newRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Message Board - listening on port ${PORT}!`);
});
