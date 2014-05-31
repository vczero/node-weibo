var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var notification={
    url:weiUrls.notification.protocol+weiUrls.notification.host+weiUrls.notification.path,
    send:send
};

//给一个或多个用户发送一条新的状态通知
function send(options,callback){
    var url=remind.url+'send.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=notification;