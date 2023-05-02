const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors')

// Set the views directory
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { text: "Harish" })
})

app.use(cors())

app.listen(4000)