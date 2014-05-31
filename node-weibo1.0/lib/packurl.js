var request=require('request');

//打包url，并进行GET/POST请求
var packurl={
    packGetUrl:packGetUrl,
    packPostUrl:packPostUrl,
    errorJson:{
        "status":"0",
        "message":"服务出错"
    }
};

//打包url，并GET请求
function packGetUrl(url,parasJson,callback){
    var paras=[];
    var opts={
        url:url,
        method: 'GET'
    };
    if(parasJson!==null){
        for(var key in parasJson){
            var para=key+'='+parasJson[key];
            paras.push(para);
        }
        opts.url=opts.url+'?'+paras.join('&');
    }
    request(opts,function(error, response, body){
        if(!error && response.statusCode == 200){
            var json=JSON.parse(body);
            callback(json);
        }
        else{
            callback(packurl.errorJson);
        }
    });
}

//打包url，并POST请求
function packPostUrl(url,parasJson,callback){
    var opts = {
        url:url,
        method: 'POST',
        form:parasJson
    };
    request(opts,function(error, response, body){
        if(!error && response.statusCode == 200){
            var json=JSON.parse(body);
            callback(json);
        }
        else{
            callback(packurl.errorJson);
        }
    });
}
module.exports=packurl;
