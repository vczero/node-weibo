var oauth2=require('../lib/oauth2');
var Authorize=oauth2.Authorize;
var AccessToken=oauth2.AccessToken;

new Authorize().authorize();
var a=new AccessToken().getAccess_token();
console.log(a);











