var http=require('http');
var url=require('url');
var oauth2=require('../lib/oauth2');


oauth2.authorize();
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var myurl=url.parse(request.url,true);
    var options_access_token={
        "code":myurl.query.code,
        "client_id":"your client_id",
        "client_secret":"your client_secret",
        "grant_type":"authorization_code",
        "redirect_uri":"your redirect_uri"
    };
    oauth2.access_token(options_access_token,function(data){
        console.log(data);
    });
    options_get_token_info={
        "access_token":"2.00AyNwADCMVYeE55a5c9ad56Ga9tFE"
    };
    oauth2.get_token_info(options_get_token_info,function(data){
        console.log(data);
    });
    response.end('Hello World\n');
}).listen('3000','localhost');
















