const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const port = 3000 || process.env.PORT;
//Configuration
app.set('view engine', 'ejs'); //Set Ejs like main template

//Middlewares
app.use('/public', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes
app.get('/', routes.home);
app.get('*', routes.notFound);

//Post
app.post('/add', routes.add);

app.listen(port, err => {
  if (err) throw err;
  console.log('Running on port 3000');
});
