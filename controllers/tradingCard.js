const router = require('express').Router();
const tradingCardService = require('../service/tradingCard');

router.use((req, res, next) => {
    console.log('tradingCard router');
    next();
});

router.get('/', function(req, res, next) {
    res.send('tradingCard');
});  

router.get('/initialCards', (req, res, next) => tradingCardService.getAll(req, res));

router.get('/cardDescription/:id', (req, res, next) => tradingCardService.getCardDescription(req, res));

router.post('/addCard', (req, res, next) => tradingCardService.addCard(req, res));

router.delete('/deleteCard/:id', (req, res, next) => tradingCardService.deleteCard(req, res))

router.delete('/deleteAll', (req, res, next) => tradingCardService.deleteAll(req, res));


module.exports = router;