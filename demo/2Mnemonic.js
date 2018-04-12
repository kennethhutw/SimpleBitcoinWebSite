
var bitcore = require("bitcore-lib");
var Mnemonic = require('bitcore-mnemonic');

var code = new Mnemonic();
//code = new Mnemonic(Mnemonic.Words.CHINESE);
var input = new Buffer(code.toString());
var hash = bitcore.crypto.Hash.sha256(input);
var bn = bitcore.crypto.BN.fromBuffer(hash);
var pk = new bitcore.PrivateKey(bn);
var WIF = pk.toWIF();
var address = pk.toAddress();

console.log("Mnemonic : " + code.toString() + ", WIF key : " + WIF + "  ,private key : " + pk + " , Public key : " + address);