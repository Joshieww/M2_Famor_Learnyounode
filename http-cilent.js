const http = require('http'); 

const url = process.argv[2]; 

http.get(url, (response) => {
  response.setEncoding('utf8'); 

  response.on('data', (chunk) => {
    console.log(chunk); 
  });

}).on('error', (err) => {
  console.error(`Error: ${err.message}`); 
});
