import nodemailer from "nodemailer"


const sendMail = async (req,res) => {
    res.send("Mail is Sending Successfully...")

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'wilma.schultz@ethereal.email',
            pass: 'JXV9n5JKPQF1bE86St'
        }
        
    });
    
    let info = await transporter.sendMail({
        from: '"Prashant Rai" <prashantrai642@gmail.com>', 
        to: "neogcoding@gmail.com", 
        subject: "Hello ✔ from Prashant", 
        text: "Hello world, from NodeMailer", 
        html: "<b>Working</b>",
      });

      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.json(info)

}

export default sendMail