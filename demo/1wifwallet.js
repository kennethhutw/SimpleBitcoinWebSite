var bitcore = require("bitcore-lib");

var pk = new bitcore.PrivateKey()
var WIF = pk.toWIF();

var address = pk.toAddress();

console.log("private key : " + pk + " ,WIF key : " + WIF + " , Public key : " + address);

//https://www.bitaddress.org/bitaddress.org-v3.3.0-SHA256-dec17c07685e1870960903d8f58090475b25af946fe95a734f88408cef4aa194.html