// Try to simulate momentum response

var net = require('net'),
    fs = require('fs');

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number;
}

var server = net.createServer(function(c) { //'connection' listener
  console.log('fake-momentum connected');
  c.on('data', function(data){
    var key5 = Math.floor((Math.random()*100000)+1); 
    var key8 = Math.floor((Math.random()*100000000)+1); 

    var hour2 = new Date().getHours();
    var min2 = new Date().getMinutes();

    var momentumReplay = zeroFill(hour2,2) + '/'+ zeroFill(min2,2) +'-'+ zeroFill(key5,5)  +'-'+ zeroFill(key8,8);
    var replayLength = '20';

    var fileName = 'mail/'+ momentumReplay.replace('/','-');;
    fs.writeFile(fileName, data.toString(), function (err) {
      if (err) throw err;
    });
    c.write(replayLength+momentumReplay);
  });
});

server.on('error', function (e) {
  console.log('error: ' + e.code);
});

server.listen(8124, function() { //'listening' listener
  address = server.address();
  console.log("opened server on %j", address);
});
