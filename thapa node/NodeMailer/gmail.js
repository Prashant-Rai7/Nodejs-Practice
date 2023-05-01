import nodemailer from "nodemailer"

const gmail = async (req,res) => {

var transporter = nodemailer.createTransport({

  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: '19ce073@gardividyapith.ac.in',
    pass: 'acaiziszrkukdcgv'
  }
});

var mailOptions = {
  from: '19ce073@gardividyapith.ac.in', 
  to: 'neogcoding@gmail.com',
  subject: 'Prashant: Sending Email using Node.js[nodemailer]',
  text: 'Congratulations Sir, That was easy! AND I sent mail through Node.js'
};

transporter.sendMail(mailOptions, function( error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // console.log(info)
  }
});

}


export default gmail