var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){

  //요청한 주소 전체
  console.log(request.url);
  var parsedUrl = url.parse(request.url);
  // parsing된 url 중에 서버 url에 해당하는 pathname
  var resource = parsedUrl.pathname;
  console.log('resource path = %s',resource);

  // 리소스 비교
  if(resource == '/address')
  {
    response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    response.end('정글');
  }else if(resource == '/phone')
  {
    response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    response.end('010-1234-4567');
  }else if(resource == '/name')
  {
    response.writeHead(200, {'Content-Type':'text/html;charset=UTF-8'});
    response.end('고릴라');
  }else
  {
    response.writeHead(404, {'Content-Type':'text/html;charset=UTF-8'});
    response.end('404 Page Not Found');
  }
});

server.listen(80, ()=>{
  console.log('Server is running...');
});
