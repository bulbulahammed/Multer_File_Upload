const express = require("express");
const app = express();
const PORT = 3000;
const multer = require("multer");

// Home route
app.get("/",(req,res)=>{
    res.send("You are at home route");
});


// File upload folder
const Upload_Folder = "./uploads";

// upload
var upload = multer({
    dest:Upload_Folder
})

// file upload via post method at home route
app.post("/",upload.array("avatar",3),(req,res)=>{
    res.send("Your file uploaded")
});



app.listen(PORT,(req,res)=>{
    console.log(`App is listening at localhost ${PORT}`)
})