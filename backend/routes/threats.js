const express = require('express');
const router = express.Router();
const {
  getThreats,
  getThreatById,
  getThreatStats,
} = require('../controllers/threatController');

router.get('/', getThreats);            // GET /api/threats
router.get('/stats', getThreatStats);  // GET /api/threats/stats
router.get('/:id', getThreatById);     // GET /api/threats/:id

module.exports = router;
