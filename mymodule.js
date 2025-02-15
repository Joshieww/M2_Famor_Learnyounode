const fs = require('fs');
const path = require('path');

module.exports = function (dirPath, extension, callback) {
  // Use fs.readdir to read the directory asynchronously
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return callback(err, null); // If an error occurs, pass it to the callback
    }

    // Filter the files by the given extension and call the callback
    const filteredFiles = files.filter(file => path.extname(file) === '.' + extension);
    callback(null, filteredFiles); // Pass null for error and filtered files to callback
  });
};
