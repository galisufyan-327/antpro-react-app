const express = require('express')
const app = express()
const dotenv = require('dotenv');
var cors = require('cors')
var bodyParser = require('body-parser')
dotenv.config();
const router =  require('./routes/routes') 
 
app.use(bodyParser())
app.use(cors())
app.use('/', router);

app.listen(process.env.PORT, () => {
  console.log(`practice App listening at http://localhost:${process.env.PORT}`)
})