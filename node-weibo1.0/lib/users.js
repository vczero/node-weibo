var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var users={
    url:weiUrls.users.protocol+weiUrls.users.host+weiUrls.users.path,
    show:show,
    domain_show:domainShow,
    counts:counts,
    get_top_status:getTopStatus,
    set_top_status:setTopStatus,
    cancel_top_status:cancelTopStatus
};

//根据用户ID获取用户信息
function show(options,callback){
    var url=users.url+'show.json';
    packurl.packGetUrl(url,options,callback);
}

//通过个性化域名获取用户资料以及用户最新的一条微博
function domainShow(options,callback){
    var url=users.url+'domain_show.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取用户的粉丝数、关注数、微博数
function counts(options,callback){
    var url=users.url+'counts.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户主页置顶微博
function getTopStatus(options,callback){
    var url=users.url+'get_top_status.json';
    packurl.packGetUrl(url,options,callback);
}

//设置当前用户主页置顶微博
function setTopStatus(options,callback){
    var url=statuses.url+'set_top_status.json';
    packurl.packPostUrl(url,options,callback);
}

//取消当前用户主页置顶微博
function cancelTopStatus(options,callback){
    var url=users.url+'cancel_top_status.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=users;