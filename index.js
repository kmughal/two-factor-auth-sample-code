 const express = require("express");
 const speakeasy = require("speakeasy");
 const path = require("path");
 
 const {
   generateImage
 } = require("./src/services/qrcode-image-generation");
 const {
   tokenValidator
 } = require("./src/services/token-validator");

 const app = express();
 const secrete = speakeasy.generateSecret();

 app.get("/", (req, res) => {
   const htmlPath = path.join(__dirname, "index.html");
   res.sendFile(htmlPath);
 });

 app.get("/generateImage", async (req, res) => {
   const url = secrete.otpauth_url;
   const dataUrl = await generateImage(url);
   res.status(200).send(`<img src="${dataUrl}"/>`);
 });

 app.get("/validtaeToken/:token", async(req, res) => {
   const {
     token
   } = req.params;
   const base32secret = secrete.base32;
   var verified = await tokenValidator(base32secret, token);
   console.log(verified,"verified");
   res.status(200).send(verified);
 });

 app.listen(3000, () => console.log("connected"));