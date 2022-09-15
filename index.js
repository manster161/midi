const mormalmidi = require('./mormalmidi.js');

mormalmidi.init();
mormalmidi.addMapping(83, val83);

function val83(value){
    console.log(`Recieved value ${value} on cc 83`);
}

setTimeout(function() {
    mormalmidi.close();
  }, 100000);
