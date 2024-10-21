const express = require('express');
const dotenv = require('dotenv');

// Loading env variables
dotenv.config();

const { sendSampleMail } = require('../controllers/mail.controllers')

const mailRouter = express.Router();

// Sample Route to send an email
mailRouter.get('/sample/:email', sendSampleMail);

module.exports = mailRouter