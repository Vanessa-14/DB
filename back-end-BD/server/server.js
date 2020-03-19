require('./config/config');
require('colors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');



// Habilita CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    );
    next();
});

// Requerir las APIS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use('/api', require('./routes/index'));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(require('./routes/customers/customers'));

mongoose.connect('mongodb://localhost:27017/sample_airbnb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    (err, resp) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');
    });

app.listen(process.env.PORT, () => {
    console.log('Escuchando por el puerto 3000 ', process.env.PORT);
});

