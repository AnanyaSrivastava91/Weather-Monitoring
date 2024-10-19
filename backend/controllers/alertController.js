const Alert = require('../models/Alert');

const createAlert = async (message) => {
  const alert = new Alert({ message });
  await alert.save();
};

const getAlerts = async (req, res) => {
  const alerts = await Alert.find().sort({ timestamp: -1 });
  res.json(alerts);
};

module.exports = { createAlert, getAlerts };
