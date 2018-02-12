const Event = require('events');
let ev = new Event();
ev.on('msg', function(a, b, c){
    console.info('收到了msg消息', a, b, c);
})
ev.emit('msg', 12, 12, 45);