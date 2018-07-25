const express = require('express');
const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/',function(req , res){
    res.end("Hello");
    console.log(req.statusCode);
});

app.listen(port , ip);
console.log(ip,port);
module.exports = app;