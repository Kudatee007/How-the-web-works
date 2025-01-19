// Importing the 'dns' module for DNS lookups
const dns = require('node:dns');

// Performing a DNS lookup for the domain 'example.org'
dns.lookup('example.org', (err, address, family) => {
  if (err) throw err;
  // Logging the IP address and the IP family (IPv4 or IPv6) to the console
  console.log('address: %j family: IPv%s', address, family);
});
// Example output: address: "2606:2800:21f:cb07:6820:80da:af6b:8b2c" family: IPv6