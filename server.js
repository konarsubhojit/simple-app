const express = require('express');
const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const pug = require('pug');

const message = pug.compileFile('message.pug');

app.get('*',function(req , res){
    res.end(message({name: 'Subhojit'}));
    console.log(req.path);
});

app.listen(port , ip);
console.log(ip,port);
module.exports = app;