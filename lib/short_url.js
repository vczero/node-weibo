var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var short_url={
    url:weiUrls.short_url.protocol+weiUrls.short_url.host+weiUrls.short_url.path,
    shorten:shorten,
    expand:expand,
    share_counts:share_counts,
    share_statuses:share_statuses,
    comment_counts:comment_counts,
    comment_comments:comment_comments
};

//将一个或多个长链接转换成短链接
function shorten(options,callback){
    var url=short_url.url+'shorten.json';
    packurl.packGetUrl(url,options,callback);
}

//将一个或多个短链接还原成原始的长链接
function expand(options,callback){
    var url=short_url.url+'expand.json';
    packurl.packGetUrl(url,options,callback);
}

//获取短链接在微博上的微博分享数
function share_counts(options,callback){
    var url=short_url.url+'share/counts.json';
    packurl.packGetUrl(url,options,callback);
}

//获取包含指定单个短链接的最新微博内容
function share_statuses(options,callback){
    var url=short_url.url+'share/statuses.json';
    packurl.packGetUrl(url,options,callback);
}

//获取短链接在微博上的微博评论数
function comment_counts(options,callback){
    var url=short_url.url+'comment/counts.json';
    packurl.packGetUrl(url,options,callback);
}

//获取包含指定单个短链接的最新微博评论
function comment_comments(options,callback){
    var url=short_url.url+'comment/comments.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=short_url;