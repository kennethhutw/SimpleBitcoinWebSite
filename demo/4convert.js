var request = require("request");

request({
    url: 'https://api.blockchain.info/stats',
    json: true
}, function (error, response, body) {
    if (error) {
        console.log("error : " + error);
    }
    console.log(response);
    console.log("response : " + JSON.stringify(response.body));
});