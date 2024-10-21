const nodemailer = require('nodemailer');

//Transporter to send mails via nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // Set in .env 
        pass: process.env.PASSWORD, // Set an application password for 'nodemailer' in gmail and put that string in .env
    },
});

module.exports.sendSampleMail = async (req, res, next) => {
    try{
        transporter.sendMail({
            from: 'noreply@yourdomain.com', // Sample mail
            to: req.params.email, // Pass in as params
            cc: '', // Some CC if needed
            subject: 'Greetings from nodemailer',
            html: `
                <h1> Hi there this mail was sent by nodemailer </h1>
            `
        }, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Email sent: ' + info.response);
                res.json({
                    msg: 'mail sent'
                })
            }
        })
    }catch(error){  
        next(error)
    }
}