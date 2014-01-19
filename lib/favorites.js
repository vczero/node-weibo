var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var favorites={
    url:weiUrls.favorites.protocol+weiUrls.favorites.host+weiUrls.favorites.path,
    favorites:favorite,
    ids:ids,
    show:show,
    by_tags:byTags,
    tags:tags,
    by_tags_ids:byTags_ids,
    create:createW,
    destroy:destroy,
    destroy_batch:destroyBatch,
    tags_update:tags_update,
    tags_update_batch:tags_updateBatch,
    tags_destroy_batch:tags_destroy_batch
};

//获取当前登录用户的收藏列表
function favorite(options,callback){
    var url=favorites.url+'.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前用户的收藏列表的ID
function ids(options,callback){
    var url=favorites.url+'favorites/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//根据收藏ID获取指定的收藏信息
function show(options,callback){
    var url=favorites.url+'show.json';
    packurl.packGetUrl(url,options,callback);
}

//根据标签获取当前登录用户该标签下的收藏列表
function byTags(options,callback){
    var url=favorites.url+'by_tags.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户的收藏标签列表
function tags(options,callback){
    var url=favorites.url+'tags.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前用户某个标签下的收藏列表的ID
function byTags_ids(options,callback){
    var url=favorites.url+'by_tags/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//添加一条微博到收藏里
function createW(options,callback){
    var url=favorites.url+'create.json';
    packurl.packPostUrl(url,options,callback);
}

//取消收藏一条微博
function destroy(options,callback){
    var url=favorites.url+'destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//根据收藏ID批量取消收藏
function destroyBatch(options,callback){
    var url=favorites.url+'destroy_batch.json';
    packurl.packPostUrl(url,options,callback);
}

//更新一条收藏的收藏标签
function tags_update(options,callback){
    var url=favorites.url+'tags/update.json';
    packurl.packPostUrl(url,options,callback);
}

//更新当前登录用户所有收藏下的指定标签
function tags_updateBatch(options,callback){
    var url=favorites.url+'tags/update_batch.json';
    packurl.packPostUrl(url,options,callback);
}

//删除当前登录用户所有收藏下的指定标签
function tags_destroy_batch(options,callback){
    var url=favorites.url+'tags/destroy_batch.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=favorites;