const nodemailer = require('nodemailer');
const Alert = require('../models/Alert');

const sendAlert = async (subject, message) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject,
    text: message,
  };

  await transporter.sendMail(mailOptions);
  await Alert.create({ message });
};

module.exports = sendAlert;
