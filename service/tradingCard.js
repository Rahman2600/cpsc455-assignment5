const TradingCard = require('../models/tradingCard');

const getAll = (req, res) => {
    TradingCard
        .find({})
        .then(TradingCard => res.json(TradingCard));
};

const getCardDescription = (req, res) => {
    TradingCard
        .findById(req.params.id)
        .then(tradingCard => {
            if (tradingCard === null) {
                return res.status(404).json({ error: 'invalid id' });
            }

            return res.send(tradingCard.description);
        })
        .catch(err => res.status(500).end());
};

const addCard = (req, res) => {
    const { name, imageURL, description } = req.body;

    const tradingCard = new TradingCard({
        name: name,
        imageURL: imageURL,
        description: description
    })

    tradingCard
        .save()
        .then(savedTradingCard => res.json(savedTradingCard));
};

const deleteCard = (req, res) => {
    TradingCard
        .findByIdAndRemove(req.params.id)
        .then(result => {
            if (result === null) {
                return res.status(404).end();
            }

            return res.status(200).end();
        })
        .catch(err => res.status(500));
};

const deleteAll = (req, res) => {
    TradingCard
        .deleteMany({})
        .then(result => res.status(200).end());
};


module.exports = {
    getAll,
    addCard,
    deleteCard,
    getCardDescription,
    deleteAll
};