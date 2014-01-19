var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var statuses={
    url:weiUrls.statuses.protocol+weiUrls.statuses.host+weiUrls.statuses.path,
    public_timeline:publicTimeline,
    friends_timeline:friendsTimeline,
    home_timeline:homeTimeline,
    friends_timeline_ids:friendsTimeline_ids,
    user_timeline:userTimeline,
    user_timeline_ids:userTimeline_ids,
    timeline_batch:timelineBatch,
    repost_timeline:repostTimeline,
    repost_timeline_ids:repostTimeline_ids,
    mentions:mentions,
    mentions_ids:mentions_ids,
    bilateral_timeline:bilateralTimeline,
    show:show,
    show_batch:showBatch,
    querymid:querymid,
    count:count,
    to_me:toMe,
    to_me_ids:toMe_ids,
    go:go,
    repost:repost,
    destroy:destroy,
    upload:upload,
    upload_url_text:uploadUrlText,
    filter_create:filterCreate,
    mentions_shield:mentions_shield
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

//获取某个用户最新发表的微博列表
function userTimeline(options,callback){
    var url=statuses.url+'user_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户发布的微博的ID
function userTimeline_ids(options,callback){
    var url=statuses.url+'user_timeline/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取指定的一批用户的微博列表
function timelineBatch(options,callback){
    var url=statuses.url+'timeline_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//获取指定微博的转发微博列表
function repostTimeline(options,callback){
    var url=statuses.url+'repost_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取一条原创微博的最新转发微博的ID
function repostTimeline_ids(options,callback){
    var url=statuses.url+'repost_timeline/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//获取最新的提到登录用户的微博列表，即@我的微博
function mentions(options,callback){
    var url=statuses.url+'mentions.json';
    packurl.packGetUrl(url,options,callback);
}

//获取@当前用户的最新微博的ID
function mentions_ids(options,callback){
    var url=statuses.url+'mentions/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//获取双向关注用户的最新微博
function bilateralTimeline(options,callback){
    var url=statuses.url+'bilateral_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//根据微博ID获取单条微博内容
function show(options,callback){
    var url=statuses.url+'show.json';
    packurl.packGetUrl(url,options,callback);
}

//根据微博ID批量获取微博信息
function showBatch(options,callback){
    var url=statuses.url+'show_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//通过微博（评论、私信）ID获取其MID
function querymid(options,callback){
    var url=statuses.url+'querymid.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取指定微博的转发数评论数
function count(options,callback){
    var url=statuses.url+'count.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户关注的人发给其的定向微博
function toMe(options,callback){
    var url=statuses.url+'to_me.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户关注的人发给其的定向微博ID列表
function toMe_ids(options,callback){
    var url=statuses.url+'to_me/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//根据ID跳转到单条微博页
function go(options,callback){
    var url=statuses.url+'go';
    packurl.packGetUrl(url,options,callback);
}

//转发一条微博
function repost(options,callback){
    var url=statuses.url+'repost.json';
    packurl.packPostUrl(url,options,callback);
}

//根据微博ID删除指定微博
function destroy(options,callback){
    var url=statuses.url+'destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//上传图片并发布一条新微博
function upload(options,callback){
    var url=statuses.url+'upload.json';
    packurl.packPostUrl(url,options,callback);
}

//指定一个图片URL地址抓取后上传并同时发布一条新微博
function uploadUrlText(options,callback){
    var url=statuses.url+'upload_url_text.json';
    packurl.packPostUrl(url,options,callback);
}

//屏蔽某条微博
function filterCreate(options,callback){
    var url=statuses.url+'filter/create.json';
    packurl.packPostUrl(url,options,callback);
}

//屏蔽某个@到我的微博以及后续由对其转发引起的@提及
function mentions_shield(options,callback){
    var url=statuses.url+'mentions/shield.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=statuses;

