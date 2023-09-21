const express = require('express');
const get = require('./rotas/get');
const post = require('./rotas/post');
const patch = require('./rotas/patch');
const del = require('./rotas/delete');


const app = express();

app.use(express.json());
app.use(get);
app.use(post);
app.use(patch);
app.use(del);


app.listen(3000);