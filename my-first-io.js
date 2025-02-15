const fs = require('fs');

// Get the file path from the command line argument
const filePath = process.argv[2];

// Read the file synchronously and get its content as a string
const fileContent = fs.readFileSync(filePath, 'utf8');

// Count the number of newlines by splitting by '\n' and subtracting 1
const newlineCount = fileContent.split('\n').length - 1;

// Output the result
console.log(newlineCount);
