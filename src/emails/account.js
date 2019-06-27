const nodemailer = require("nodemailer");

const sendEmail = (email, subject , text) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        //service : 'gmail', 
        auth: {
            user: 'habeebadnan46@gmail.com', // generated ethereal user
            pass: 'cricketer' // generated ethereal password
        }
    });

    transporter.sendMail({
        from: '"Habeeb Adnan 👻" <habeebadnan46@gmail.com>', // sender address
        to: "habeebadnan33@gmail.com", // list of receivers
        subject, // Subject line
        text, // plain text body
        //  html: "<b>Hello world?</b>" // html body
    });
    console.log("Message sent to: %s", email);
}

module.exports = {
    sendEmail
}