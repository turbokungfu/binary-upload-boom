const Store = require('../models/Farm');

// @desc  Get all farms
// @route GET /api/v1/farms
// @access Public
exports.getFarms = async (req, res, next) => {
  try {
    const farms = await Farm.find();

    return res.status(200).json({
      success: true,
      count: farms.length,
      data: farms
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public
exports.addFarm = async (req, res, next) => {
  try {
    const farm = await Farm.create(req.body);

    return res.status(201).json({
      success: true,
      data: farm
    });
  } catch (err) {
    console.error(err);
    if (err.code === 11000) {
      return res.status(400).json({ error: 'This farm already exists' });
    }
    res.status(500).json({ error: 'Server error' });
  }
};