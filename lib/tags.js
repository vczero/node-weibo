var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var tags={
    url:weiUrls.tags.protocol+weiUrls.tags.host+weiUrls.tags.path,
    tags:tagsW,
    tags_batch:tagsBatch,
    suggestions:suggestions,
    create:createW,
    destroy:destroy
};

//返回指定用户的标签列表
function tagsW(options,callback){
    var url=tags.url+'.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取用户的标签列表
function tagsBatch(options,callback){
    var url=tags.url+'tags_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//获取系统推荐的标签列表
function suggestions(options,callback){
    var url=tags.url+'suggestions.json';
    packurl.packGetUrl(url,options,callback);
}

//为当前登录用户添加新的用户标签
function createW(options,callback){
    var url=tags.url+'create.json';
    packurl.packPostUrl(url,options,callback);
}

//删除一个用户标签
function destroy(options,callback){
    var url=tags.url+'destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//批量删除一组标签
function destroy_batch(options,callback){
    var url=tags.url+'destroy_batch.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=tags;