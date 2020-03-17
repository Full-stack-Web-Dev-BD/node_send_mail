var nodemailer= require('nodemailer')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alaminpublicgithub@gmail.com',
    pass: 'ayrinlover1stgithub'
  }
});

var mailOptions = {
  from: 'alaminpublicgithub@gmail.com',
  to: 'alaminprogramerr@gmail.com',
  subject: 'Thank you for sending mail',
  text: `this is email body .`    
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});