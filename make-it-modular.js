const mymodule = require('./mymodule.js'); // Import the custom module

const dirPath = process.argv[2]; // Get directory path from command-line arguments
const extension = process.argv[3]; // Get file extension from command-line arguments

// Call the function from mymodule.js with the arguments
mymodule(dirPath, extension, (err, files) => {
  if (err) {
    return console.error('There was an error:', err); // Handle errors
  }

  // Print each file in the filtered list
  files.forEach(file => console.log(file));
});
