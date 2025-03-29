const express = require('express')
const exphbs  = require('express-handlebars');
const userRouters = require('./routes/blog')

const path = require('path')
const app = express()
const port = 3000

//  Registers Handlebars as a view engine.
app.engine('handlebars', exphbs());

// This tells Express to use Handlebars for rendering views. 
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, "static")))
app.use('/',userRouters)
 

app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})