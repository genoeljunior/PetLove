const express = require('express');
const cors = require('cors');

const routes = require('./routes');
const connection = require('./src/database/database');

const app = express();

app.use(express.json());

app.use(cors());
app.use(routes);

connection.authenticate()
    .then(() => {
        console.log('Autenticado com sucesso!');
    }).catch((error) => {
        console.log(error);
    });



app.listen(3333, () => {
    console.log('Acessar => http://localhost:3333');
});