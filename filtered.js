const fs = require('fs'); 

const dirPath = process.argv[2]; 
const extension = process.argv[3]; 
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err.message);
    return;
  }

  files.filter(file => file.endsWith('.' + extension))
       .forEach(file => console.log(file)); // Print each filtered file
});
