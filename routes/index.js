var express = require('express');
var router = express.Router();
const cardController = require('../controllers/cardController');

/* GET home page. */
router.get('/', cardController.viewAll);
router.get('/edit/:id', cardController.renderEditForm);
router.post('/edit/:id', cardController.updateCard);
router.get('/add', cardController.renderAddForm);
router.post('/add', cardController.addPokemon);

module.exports = router;
