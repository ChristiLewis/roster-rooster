const inquirer = require('inquirer');
const fs = require('fs');

//RESEARCH FROM https://stackoverflow.com/questions/21617468/node-js-generate-html

// var http = require('http');

// http.createServer(function (req, res) {
//     var html = buildHtml(req);

//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Content-Length': html.length,
//         'Expires': new Date().toUTCString()
//     });
//     res.end(html);
// }).listen(8080);

// function buildHtml(req) {
//     var header = '';
//     var body = '';

//     // concatenate header string
//     // concatenate body string

//     return '<!DOCTYPE html>'
//         + '<html><head>' + header + '</head><body>' + body + '</body></html>';
// };

var fs = require('fs');

var fileName = 'path/to/file';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});