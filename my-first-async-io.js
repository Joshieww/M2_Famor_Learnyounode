const fs = require('fs'); // Import the fs (filesystem) module

const filePath = process.argv[2]; 
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err.message);
    return;
  }

  const newlineCount = data.split('\n').length - 1;

  console.log(newlineCount);
});
