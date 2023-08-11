const crypto = require("node:crypto")

const start = Date.now();  // Use Date.now() to get a numeric timestamp

crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512")
crypto.pbkdf2Sync("Password", "salt", 100000, 512, "sha512")
console.log("Hash:", Date.now() - start);
