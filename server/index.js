var http = require('http');
var fs   = require('fs');
var path = require('path');
var Buffer = require('buffer').Buffer;
var querystring = require('querystring');
var ROOT_PATH = path.resolve(__dirname);
console.log(__dirname);
console.log(ROOT_PATH);

const time = new Date().getTime();
let notes = [{
  'id': 1,
  'title': 'first',
  'content': 'first article',
  'time': time 
}, {
  'id': 2,
  'title': 'second',
  'content': 'second article',
  'time': time 
}, {
  'id': 3,
  'title': 'third',
  'content': 'third article',
  'time': time 
}, {
  'id': 4,
  'title': 'fourth',
  'content': 'data from server',
  'time': time 
}];

http.createServer(function(req, res) {
  //res.writeHead(200, {'content-type': 'text/html'});
  //res.end('<html><body>Hello World</body></html>\n');
  var urlArray = req.url.split(':');  
  var pathName = urlArray[0];
  var noteId = urlArray[1] ? Number(urlArray[1]) : null;
  console.log(pathName, noteId);
  if(pathName === '/note' || (pathName === '/note/' && noteId === null)) {
    if(req.method === 'GET') {
      res.writeHead(200, {
                           'content-type': 'application/json',
                           'Access-Control-Allow-Origin': '*'
                         });
      res.end(JSON.stringify({notes:notes}));
    }
  } else if(pathName === '/note/') {
    switch (req.method) {
      case 'GET':
        break;
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
    }
  } else if(hasBody(req)) {
    handleBody(req, res); 
  } else {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify({a:1}));
    //res.end();
  }

}).listen(1339, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1339');

var hasBody = function(req, res) {
  return 'transfer-encoding' in req.headers || 'content-length' in req.headers;
}

var handleBody = function(req, res) {
  var buffers = [];
  req.on('data', function(chunk) {
    buffers.push(chunk);
  });
  req.on('end', function() {
    req.rawBody = Buffer.concat(buffers).toString();
    handleData(req, res); 
  });
}

var mime = function(req) {
  var str = req.headers['content-type'] || '';
  return str.split(';')[0];
}

var handleData = function(req, res) {
  var formBody;
  if(mime(req) === 'application/x-www-form-urlencoded') {
    formBody = querystring.parse(req.rawBody);
    console.log(formBody);
  }
}


