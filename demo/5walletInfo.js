var request = require("request");

var account = '1NR5UxavEJHDtC6QdRZLjS2xfyE4Q1zZvr';
var testaccount = 'mhKTYzfeNuMWq2foiFXYSZhKWdLWgAbtdW';
request({
    url: "https://blockexplorer.com/api/addr/" + account,
    json: true
}, function (error, response, body) {

    console.log("response : " + JSON.stringify(response.body));
});

request({
    url: 'https://blockexplorer.com/testnet/api/addr/' + testaccount,
    json: true
}, function (error, response, body) {
    console.log("test response : " + JSON.stringify(response.body));
});