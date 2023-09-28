const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const methodOverride = require('method-override')

const homeRouter = require('./routers/home');
const postRouter = require('./routers/post')


mongoose.connect('mongodb://127.0.0.1:27017/SamSocial')
    .then(() => {
        console.log('DB CONNECTED');
    })
    .catch(e => {
        console.log('DB CONNECTION ERROR');
        console.log(e);
    })

app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}));

app.engine('ejs', ejsMate);

app.use('/', homeRouter);
app.use('/', postRouter)
    app.use(methodOverride('_method'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000, () => {
    console.log('SERVER IS LIVE');
});