const express = require('express');
const router = express.Router();
const { analyzeThreat } = require('../controllers/analyzeController');

router.post('/', analyzeThreat);

module.exports = router;
