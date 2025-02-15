const http = require('http'); // Import the http module

const urls = process.argv.slice(2); // Get the URLs from command-line arguments

// Array to store the content for each URL
let responses = [];
let count = 0; // To keep track of how many responses we have

// Function to handle HTTP GET request for each URL
function getURLData(index) {
  http.get(urls[index], (response) => {
    let data = ''; // To collect data from the response

    // Set encoding to UTF-8
    response.setEncoding('utf8');

    // Collect data
    response.on('data', (chunk) => {
      data += chunk;
    });

    // When the response ends, store the result and print it
    response.on('end', () => {
      responses[index] = data; // Store the response data in the correct position
      count++; // Increment the count to track how many responses we've received

      // Once all responses are collected, print them in order
      if (count === urls.length) {
        responses.forEach((response) => {
          console.log(response);
        });
      }
    });

  }).on('error', (err) => {
    console.error(`Error fetching data: ${err.message}`);
  });
}

// Make HTTP requests for all URLs in the order they were provided
for (let i = 0; i < urls.length; i++) {
  getURLData(i);
}
