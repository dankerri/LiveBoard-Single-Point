var io = require('socket.io-client')


const ADDRESS = 'http://149.28.193.28';
const PORT = 9999;

const THE_URL = ADDRESS + ':' + PORT 

const socket = io(THE_URL)


setInterval(() => {
    var myDate = new Date();
    var mytime=myDate.toLocaleTimeString();
    socket.emit('newCode', {code : mytime})
}, 1000)
console.log("running")
