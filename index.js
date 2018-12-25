var express = require('express');
var app = express();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

//sending to whatsapp
// client.messages
//       .create({
//         body: 'Testing our whatsapp bot - the IGG campaign is live tomorrow!',
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:+972505559442'
//       })
//       .then(message => console.log(message.sid))
//       .done();


//sending to SMS
client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+972526269203',
     to: '+972533308841'
   })
  .then(message => console.log(message.sid))
  .done();



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
