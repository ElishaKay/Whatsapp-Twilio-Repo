var express = require('express');
var app = express();

const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        body: 'How you doin today?!',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+972533308841'
      })
      .then(message => console.log(message.sid))
      .done();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});