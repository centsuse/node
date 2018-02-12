const dns = require('dns');

dns.resolve('baiduevents.com', (err, res) => {
    if(err){
        console.info(解析失败);
    }else{
        console.info(res);
    }
})
