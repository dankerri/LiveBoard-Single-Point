var io = require('socket.io-client')


const ADDRESS = 'http://192.168.0.101';
const PORT = 9999;

const THE_URL = ADDRESS + ':' + PORT 

const socket = io(THE_URL)

let count = 0
socket.on('updateCode', ()=>{
    console.log(count)
    count = count + 1 
})