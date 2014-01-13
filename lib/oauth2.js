var child_pro=require('child_process');
var config=require('../config/config');
var authorUrl=require('../config/weiboUrls').weiUrls.authorize;

var oauth2=function(){};//oauth2命名空间
/*
+-----------------------Authorize类--------------------------------+
 */
oauth2.Authorize=function(){};
oauth2.Authorize.prototype.authorize=function(client_id,redirect_uri){
    var path='';
    if(arguments.length===0){
        path=authorUrl+'authorize?client_id='+config.appKey.appKey
            +'^&redirect_uri='+config.appKey.redirectUrl;
    }
    else{
        path=authorUrl+'authorize?client_id='+client_id
            +'^&redirect_uri='+redirect_uri;
    }
    child_pro.exec('start '+path);
};

/*
 +-----------------------AccessToken类--------------------------------+
 */
oauth2.AccessToken=function(client_id,client_secret,grant_type,code,redirect_uri){
    this.client_id=client_id;
    this.client_secret=client_secret;
    this.grant_type=grant_type;
    this.code=code;
    this.redirect_uri=redirect_uri;

    var path=authorUrl+'access_token?client_id='+client_id+'^&client_secret='
        +client_secret+'^&grant_type=authorization_code^&code='+'^&redirect_uri='
        +redirect_uri+'^&code='+code;

    this.access_token='a';
    this.expires_in='b';
    this.remind_in='c';
    this.uid='d';
};

oauth2.AccessToken.prototype.getAccess_token=function(){
    return this.access_token;
};

oauth2.AccessToken.prototype.getExpires_in=function(){
    return this.expires_in;
};

oauth2.AccessToken.prototype.getRemind_in=function(){
    return this.remind_in;
};

oauth2.AccessToken.prototype.getUid=function(){
    return this.uid;
};

module.exports=oauth2;

