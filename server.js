const express = require('express')
var session = require('express-session');
const app = express()
const port = 3000

app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 }}));
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


var sessionData
app.post('/account',function(req,res){
  sessionData = req.session;
  sessionData.user = {};
  let username = "adam";
  sessionData.user.username = username;
  sessionData.user.password = password;
   console.log("Setting session data:username=%s and salary=%s", sessionData.user.username, sessionData.user.password)
 
 // res.end('Saved session and salary : ' + sessionData.username);
 res.json(sessionData.user)
});