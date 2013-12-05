/**
 * @author Chapman
 */

/**
 * new world
 */

var express = require("express");
var app = express();
app.use(express.logger());

//function mail_confirmation(){
   
   /* 
    var api_user = 'chapman';
    var api_key = 'qwerty23';

    var sendgrid  = require('sendgrid')(api_user, api_key);

    sendgrid.send({
      to:       'chapman@colabeo.com',
      from:     'other@example.com',
      subject:  'Hello World from nodejs heroku',
      text:     'My first email through SendGrid. nodjs'
    }, function(err, json) {
      if (err) { return console.error(err); }
      console.log(json);
    });*/
//}


app.get('/', function(request, response) {
  response.send('Hello World! nodeJS via heroku');
//  mail_confirmation();
});

/*app.get('/send.html', function(request, response) {
   mail_confirmation();
   response.send('email sent'); 
});*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


