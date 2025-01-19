// Import the 'ftp' module
const Client = require('ftp');

// Create a new instance of the FTP client
const c = new Client();

// Event listener for when the client is ready
c.on('ready', function() {
    // List the contents of the current directory on the FTP server
    c.list(function(err, list) {
        // If an error occurs, throw it
        if (err) throw err;
        
        // Log the list of directory contents to the console
        console.dir(list);
        
        // End the FTP connection
        c.end();
    });
});

// Connect to the FTP server (default is localhost on port 21, with anonymous login)
c.connect();