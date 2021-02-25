var express = require('express');
var router = express.Router();

const myObj = [{ "name":"alex", "age":30, "car":"audi" },{ "name":"bob", "age":30, "car":"audi" },{ "name":"jhon", "age":30, "car":"audi" },{ "name":"smex", "age":30, "car":"audi" },{ "name":"sohab", "age":30, "car":"audi" }];

// Home page route.
router.get('/', function (req, res) {
  res.send('hello World');
})

//list get 
router.get('/list', function (req, res) {
  res.status(200).send(myObj)
})

//list post 
router.post('/api/fetch', function (req, res) {
  res.status(200).send(JSON.stringify(req.body))
})


module.exports = router;