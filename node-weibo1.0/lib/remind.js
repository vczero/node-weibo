var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var remind={
    url:weiUrls.remind.protocol+weiUrls.remind.host+weiUrls.remind.path,
    unread_count:unreadCount,
    set_count:setCount
};

//获取某个用户的各种消息未读数
function unreadCount(options,callback){
    var url=remind.url+'unread_count.json';
    packurl.packGetUrl(url,options,callback);
}

//对当前登录用户某一种消息未读数进行清零
function setCount(options,callback){
    var url=remind.url+'set_count.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=remind;
