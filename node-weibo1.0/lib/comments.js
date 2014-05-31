var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var comments={
    url:weiUrls.comments.protocol+weiUrls.comments.host+weiUrls.comments.path,
    show:show,
    by_me:byMe,
    to_me:toMe,
    timeline:timeline,
    mentions:mentions,
    show_batch:showBatch,
    create:createW,
    destroy:destroy,
    destroy_batch:destroyBatch,
    reply:reply
};

//根据微博ID返回某条微博的评论列表
function show(options,callback){
    var url=comments.url+'show.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户所发出的评论列表
function byMe(options,callback){
    var url=comments.url+'by_me.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户所接收到的评论列表
function toMe(options,callback){
    var url=comments.url+'to_me.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户的最新评论包括接收到的与发出的
function timeline(options,callback){
    var url=comments.url+'timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取最新的提到当前登录用户的评论，即@我的评论
function mentions(options,callback){
    var url=comments.url+'mentions.json';
    packurl.packGetUrl(url,options,callback);
}

//根据评论ID批量返回评论信息
function showBatch(options,callback){
    var url=comments.url+'show_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//对一条微博进行评论
function createW(options,callback){
    var url=comments.url+'create.json';
    packurl.packPostUrl(url,options,callback);
}

//删除一条评论
function destroy(options,callback){
    var url=comments.url+'destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//根据评论ID批量删除评论
function destroyBatch(options,callback){
    var url=comments.url+'destroy_batch.json';
    packurl.packPostUrl(url,options,callback);
}

//回复一条评论
function reply(options,callback){
    var url=comments.url+'reply.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=comments;