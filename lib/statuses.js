var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var statuses={
    url:weiUrls.statuses.protocol+weiUrls.statuses.host+weiUrls.statuses.path,
    public_timeline:publicTimeline,
    friends_timeline:friendsTimeline,
    home_timeline:homeTimeline,
    friends_timeline_ids:friendsTimeline_ids
};

//返回最新的200条公共微博，返回结果非完全实时
function publicTimeline(options,callback){
    var url=statuses.url+'public_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户及其所关注用户的最新微博
function friendsTimeline(options,callback){
    var url=statuses.url+'friends_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户及其所关注用户的最新微博
function homeTimeline(options,callback){
    var url=statuses.url+'home_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户及其所关注用户的最新微博的ID
function friendsTimeline_ids(options,callback){
    var url=statuses.url+'friends_timeline/ids.json';
    packurl.packGetUrl(url,options,callback);
}
