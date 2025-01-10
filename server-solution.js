const http = require('http');
const domain = require('domain');

const requestListener = (request, response) => {
  const d = domain.create();
  d.on('error', (err) => {
    console.error('Error handling request:', err);
    response.writeHead(500);
    response.end('Internal Server Error');
  });

  d.run(() => {
    // Your request handling logic here
    response.writeHead(200);
    response.end('Hello, World!');
  });
};

const server = http.createServer(requestListener);

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(8080);

console.log('Server is running on port 8080');