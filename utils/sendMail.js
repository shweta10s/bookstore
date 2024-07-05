const nodemailer = require("nodemailer");

exports.sendMail= (req, res)=> {
const transport = nodemailer.createTransport({
    service: "gmail",
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "sh491441si@gmail.com",
    pass: "qjexleamvqmvbjbg",
  },
});

const mailOptions ={
  // send mail with defined transport object
 
    from: '"PQR BookStore" <sh491441si@gmail.com>', // sender address
    to: req.body.email, // list of receivers
    subject: "BookStore Subscription", // Subject line
    html: `<h1>CONGRATULATIONS!!!</h1> <br> <p>Welcome to PQR BookStore. Now, you can read the books from PQR BookStore.</p> <br> <a href="/">Home</a>`
}   

transport.sendMail(mailOptions, (err, info) =>{
    if(err) return res.send(err);
    console.log(info);
   
})
}