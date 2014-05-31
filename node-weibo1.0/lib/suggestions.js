var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var suggestions={
    url:weiUrls.suggestions.protocol+weiUrls.suggestions.host+weiUrls.suggestions.path,
    users_hot:users_hot,
    users_mayInterested:users_mayInterested,
    users_byStatus:users_byStatus,
    statuses_reorder:statuses_reorder,
    statuses_reorder_ids:statuses_reorder_ids,
    favorites_hot:favorites_hot,
    users_not_interested:users_notInterested
};

//返回系统推荐的热门用户列表
function users_hot(options,callback){
    var url=suggestions.url+'users/hot.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户可能感兴趣的人
function users_mayInterested(options,callback){
    var url=suggestions.url+'users/may_interested.json';
    packurl.packGetUrl(url,options,callback);
}

//根据一段微博正文推荐相关微博用户
function users_byStatus(options,callback){
    var url=suggestions.url+'users/by_status.json';
    packurl.packGetUrl(url,options,callback);
}

//当前登录用户的friends_timeline微博按兴趣推荐排序
function statuses_reorder(options,callback){
    var url=suggestions.url+'statuses/reorder.json';
    packurl.packGetUrl(url,options,callback);
}

//当前登录用户的friends_timeline微博按兴趣推荐排序的微博ID
function statuses_reorder_ids(options,callback){
    var url=suggestions.url+'statuses/reorder/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//返回系统推荐的热门收藏
function favorites_hot(options,callback){
    var url=suggestions.url+'favorites/hot.json';
    packurl.packGetUrl(url,options,callback);
}

//把某人标识为不感兴趣的人
function users_notInterested(options,callback){
    var url=suggestions.url+'users/not_interested.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=suggestions;