// Receive ecstream from engine and forward to momentum
// Receive response data from momentum and forward to engine
// Print ecstream and response data

var net = require('net');

var SMTPaddress = "127.0.0.1",
    SMTPport  = 8124;


// Server listen for engine and forward to momentum
var server = net.createServer(function(c) { //'connection' listener
  console.log("connected engine from %j", c.remoteAddress, c.remotePort  );
  // Connect a client to momentum
  var toSTMP = net.connect(SMTPport,SMTPaddress, function() { //'connect' listener
    console.log('toSTMP connected');
    //toSTMP.write('world!\r\n');
  });
  toSTMP.on('end', function() {
    console.log('toSTMP disconnected');
  });
  toSTMP.on('data', function(data) {
    console.log("fromSMTP toServer<<" + data.toString()+">>");
    // Forward to engine 
    c.write(data.toString());
  });
  // Do server 
  c.on('end', function() {
    console.log('toServer disconnected');
  });
  c.on('data', function(data) {
    console.log('fromEngine<<'+ data.toString()  +'>>');
  });
  console.log(c);
  c.pipe(toSTMP);
});

server.on('error', function (e) {
  console.log('error: ' + e.code);
});


// listen for engine
server.listen(1825, function() { //'listening' listener
  address = server.address();
  console.log("waiting for engine on %j", address);
});
