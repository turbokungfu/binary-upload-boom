const express = require('express');
const { getFarms, addFarm } = require('../controllers/stores');

const router = express.Router();

router
  .route('/')
  .get(getFarms)
  .post(addFarm);

module.exports = router;