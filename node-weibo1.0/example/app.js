var http=require('http');
var url=require('url');
var oauth2=require('../lib/oauth2');


oauth2.authorize();
http.createServer(function(request,response){
	
    response.writeHead(200, {'Content-Type': 'text/plain'});
    var myurl=url.parse(request.url,true);
	
    var options_access_token={
        "code":myurl.query.code,
        "client_id":"4263807830",
        "client_secret":"f314a703b2586510ae62a8baaef1570e",
        "grant_type":"authorization_code",
        "redirect_uri":"127.0.0.1:3000"
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
















