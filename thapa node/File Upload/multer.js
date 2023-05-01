const { log } = require("console");
const express = require("express");
const multer = require("multer");
const app = express();

const sanjay = multer({ storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload");
    },
    filename: function (req, file, cb) {
        console.log(file)
        let mimetype = file.mimetype
        let ext=mimetype.split('/')[1]

    //   cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    cb(null, file.originalname+`.${ext}`);

    },
  }), 
}).single("user_file");

app.post("/uploading", sanjay, (req, res) => {
  res.send("File Uploaded Successfully to Server");
});

app.listen(4000);
