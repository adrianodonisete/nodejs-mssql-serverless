const express = require('express');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sls = require('serverless-http');


const servicoRouter = require('./routes/servico');
const clienteRouter = require('./routes/cliente');

const app = express();

app.use(helmet());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/servicos', servicoRouter);
app.use('/clientes', clienteRouter);





// app.get('/2', function (req, res) {
//     res.send('Hello World!');
// });

// app.get('/novo', function (req, res) {
//     res.send('Hello World Novo!');
// });


const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});


module.exports.handler = sls(app);