var bitcore = require("bitcore-lib");

if (bitcore.PublicKey.isValid('3ab790a2aad40e59f6955d22950da3819539ce4107db276cd46920bd7c8b507d')) {
    // valid public key
    console.log("public key is not correct");
}
else{
    console.log("public key is correct");
}