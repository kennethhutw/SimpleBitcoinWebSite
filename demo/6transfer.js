var bitcore = require('bitcore-lib');
var Insight = require('bitcore-explorers').Insight;
var request = require('request');

var privateKeyWIF = 'cNKW57ZduQbSgfS5E5H7Zy8JABFAX23kCGa3hwDSchXzRvTgYuTC';

var privateKey = bitcore.PrivateKey.fromWIF(privateKeyWIF);

console.log("privateKey : " + JSON.stringify(privateKey));
var address = privateKey.toAddress();

console.log("address : " + address);
//address : mmCAnHiNmJeCCsUA3Ug9h93kTtzL1rVyVF

//check transaction : https://live.blockcypher.com/btc-testnet/

var value = new Buffer('This is a way to generate an address from a-string-risky-not-random-gussable!!');

var hash = bitcore.crypto.Hash.sha256(value);
var bn = bitcore.crypto.BN.fromBuffer(hash);
console.log("privateKey : " + JSON.stringify(privateKey));
console.log("pk : " + JSON.stringify(new bitcore.PrivateKey(bn, 'testnet')));
var address2 = new bitcore.PrivateKey(bn, 'testnet').toAddress();
console.log("address2 : " + address2);
// address2 : mzbdSoZsxDZ51jB3aBNhxctJdcF7VBB5k2

//https://bitcore.io/api/lib/transaction
var insight = new Insight('testnet');

insight.getUnspentUtxos(address, function (err, utxos) {
    if (err) {
        //Handle errors...
    }
    else {
        console.log(utxos);
        var tx = bitcore.Transaction();
        tx.from(utxos);   // Feed information about what unspent outputs one can use
        tx.to(address2, 10000) //.005BTC // Add an output with the given amount of satoshis
        tx.change(address); // Sets up a change address where the rest of the funds will go
        tx.fee(50000); // Minimum non-dust amount
        tx.sign(privateKey); // Signs all the inputs it can
        console.log("Transaction : " + JSON.stringify(tx.toObject()));
        tx.serialize();

        insight.broadcast(tx.toString(), function (error, returnedTxId) {
            if (error) {
                console.log("error : " + error);
                console.log("Transaction : " + returnedTxId);
            } else {
                console.log("Transaction : " + returnedTxId);
            }
        });

    }

});

