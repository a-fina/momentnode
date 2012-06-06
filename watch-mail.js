var conf = {
  host: 'stmp..com',
  username: '@.com',
  password: ''
};

var mail = require('mail').Mail(conf);
var fs = require('fs');

function sendMail(filename){
  mail.message({
    from: '@.com',
    to: ['@.com'],
    subject: 'Hello from Node.JS ' + filename
  })
  .body('Node speaks SMTP Æ« €!')
  .send(function(err) {
    if (err)
      console.log(err);
    else 
      console.log('Sent!');
  });
};

fs.watch('./mail', function (event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);

    fs.readFile('./mail/'+filename, function (err, data) {
      if (err) throw err;
      if (event == 'change')
        sendMail(filename);
    });

  } else {
    console.log('filename not provided');
  }
});
