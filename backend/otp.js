const express = require('express');
const router = express.Router();
const otpStore = {}; // Temporarily stores OTPs in memory

router.post('/send', (req, res) => {
  const { mobile } = req.body;
  const otp = Math.floor(1000 + Math.random() * 9000);
  otpStore[mobile] = otp;

  console.log(`Sending OTP ${otp} to ${mobile}`);
  // Here you'd integrate an SMS API like Twilio/Fast2SMS

  res.status(200).send({ success: true });
});

router.post('/verify', (req, res) => {
  const { mobile, otp } = req.body;

  if (otpStore[mobile] == otp) {
    delete otpStore[mobile];
    res.status(200).send({ success: true });
  } else {
    res.status(400).send({ error: "Invalid OTP" });
  }
});

module.exports = router;

