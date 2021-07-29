// require('dotenv').config();

// const PORT = process.env.PORT;
// const app = require('./app');
// const http = require('http');
// const server = http.createServer(app);

// server.listen(PORT, () => console.log(`Trading card app listening at http://localhost:${PORT}`));

// var express = require('express');
// var router = express.Router();
// var cards = JSON.parse("[{\"name\":\"Glaceon\",\"imageURL\":\"https://i.pinimg.com/236x/3e/e0/a5/3ee0a5fdace61f2542a762dbe5ebaac5--freeze-trading-cards.jpg\",\"description\":\"Glaceon pokemon card\"},{\"name\":\"Mewtwo\",\"imageURL\":\"https://i.pinimg.com/236x/55/da/4c/55da4c0c4cc98adf6fb516dd4ee90f06--trading-cards-pokemon.jpg\",\"description\":\"Mewtwo pokemon card\"}]");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/initialCards', function(req, res, next) {
//   res.json(cards);
// });

// router.get('/cardDescription/:id', function(req, res, next) {
//   var id = req.params.id;
//   res.send(cards[id].description);
// });

// router.post('/addCard', function(req, res, next) {
//   var cardData = req.body;
//   cards.push(cardData);
//   res.end("done");
// });

// router.delete('/deleteCard/:id', function (req, res) {
//   var id = req.params.id;
//   cards.splice(id, 1);
//   res.send('Got a DELETE request at /deleteCard');
// })

// router.delete('/deleteAll', function (req, res) {
//   cards = [];
// })

// module.exports = router;
