const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.get('/', function(req, res) {
    res.render('index.html')
})

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})