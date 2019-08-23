const Event = require('events')
const ev = new Event()

function price1(){
    console.log('大米涨价了');
}


ev.on('price',price1)
ev.on('price',function(e){
    console.log('大米涨价了',e);
    
})

ev.emit('price','大蒜')
ev.removeListener('price',price1)
ev.emit('price','大蒜')

//once
ev.once('eat',()=>{
    console.log('eat');
    
})

ev.emit('eat')
ev.emit('eat')