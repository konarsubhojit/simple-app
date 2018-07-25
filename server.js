const express = require('express');
const app = express();

const url = require('url');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const pug = require('pug');

const message = pug.compileFile('message.pug');

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ');
 }

app.get('*',function(req , res){
    var path = url.parse(req.url, true);
    var name = path.path.slice(1);
    name = name.replace('%20',' ');
    name = titleCase(name);
    res.end(message({name: name}));
    console.log(req.path);
});

app.listen(port , ip);
console.log(ip,port);
module.exports = app;