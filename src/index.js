const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const router = require('./router/index');
const db= require('./config/db');


const app = express();
const port = 3000;

db.connect();

app.engine('.hbs', hbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/view'));

app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(morgan('combined'));
router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})