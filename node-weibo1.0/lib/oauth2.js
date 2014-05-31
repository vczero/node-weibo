var child_pro=require('child_process');
var config=require('../config/config');
var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

//授权服务
var oauth2={
    url:weiUrls.oauth2.protocol+weiUrls.oauth2.host+weiUrls.oauth2.path,
    authorize:authorize,
    access_token:accessToken,
    get_token_info:getTokenInfo,
    get_oauth2_token:getOauth2Token,
    revokeoauth2:revokeOauth2
};

//请求授权
function authorize(client_id,redirect_uri){
    var url=oauth2.url;
    var path='';
    if(arguments.length===0){
        path=url+'authorize?client_id='+config.appKey.appKey
            +'^&redirect_uri='+config.appKey.redirectUrl;
    }
    else{
        path=url+'authorize?client_id='+client_id
            +'^&redirect_uri='+redirect_uri;
    }
	console.log(path);
    child_pro.exec('start '+path);
}

//获取授权
function accessToken(options,callback){
    var url=oauth2.url+'access_token';
    packurl.packPostUrl(url,options,callback);
}

//授权查询
function getTokenInfo(options,callback){
    var url=oauth2.url+'get_token_info';
    packurl.packPostUrl(url,options,callback);
}

//替换授权
function getOauth2Token(options,callback){
    var url=oauth2.url+'get_oauth2_token';
    packurl.packPostUrl(url,options,callback);
}

//授权回收
function revokeOauth2(options,callback){
    var url=oauth2.url+'revokeoauth2';
    packurl.packPostUrl(url,options,callback);
}


module.exports=oauth2;

