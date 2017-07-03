const express = require('express');
const path = require('path');
const app = express();
const pdf = require('express-pdf');

app.use(pdf);
app.use(express.static(path.join(__dirname, '/../client')));
app.get('/resume', (req,res)=> {
  res.pdf(path.resolve(__dirname, './Resume.pdf'));
})
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '/../client/index.html'))
})
let port = process.env.PORT || 5000;
app.listen(port,()=>{
  console.log("Listening on port " + port);
});

module.exports = app;