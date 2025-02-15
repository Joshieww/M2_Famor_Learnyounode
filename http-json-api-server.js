const http = require('http');
const url = require('url');
const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (path === '/api/parsetime' && query.iso) {  // Fixed endpoint name from parseTime to parsetime
    const date = new Date(query.iso);
    const responseObj = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
    res.end(JSON.stringify(responseObj));
  } else if (path === '/api/unixtime' && query.iso) {
    const date = new Date(query.iso);
    const responseObj = {
      "unixtime": date.getTime()
    };
    res.end(JSON.stringify(responseObj));
  } else {
    // Return empty JSON object for invalid paths
    res.end("");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});