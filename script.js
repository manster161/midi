const midi = require('midi');
const fs = require('fs');
const { Console } = require('node:console');
const config = require('config');

const hub = require('./midihub.js');
const portNum = config.get('midi.port');

hub.addMapping(83, callback83);

console.log(`midi port from config ${config.midi.port}`);

var portName = "";
const input = new midi.Input();

var count = input.getPortCount();

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
// Custom simple logger
const logger = new Console({ stdout: output, stderr: errorOutput });

for (var i = 0; i < count; i++){
   logger.log(input.getPortName(i));
}

input.on('message', (deltaTime, message) => {
    hub.newMessage(message);
})

portName = input.getPortName(portNum);
logger.log(`Opening port: ${portName}`)
console.log(`Opening port: ${portName}`)
input.openPort(0);

function callback83(value){
    console.log(`callbackRecieved for cc83 ${value}`);
}

setTimeout(function() {
    input.closePort();
  }, 100000);
