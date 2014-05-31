var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var trends={
    url:weiUrls.trends.protocol+weiUrls.trends.host+weiUrls.trends.path,
    hourly:hourly,
    daily:daily,
    weekly:weekly
};

//返回最近一小时内的热门话题
function hourly(options,callback){
    var url=trends.url+'hourly.json';
    packurl.packGetUrl(url,options,callback);
}

//返回最近一天内的热门话题
function daily(options,callback){
    var url=trends.url+'daily.json';
    packurl.packGetUrl(url,options,callback);
}

//返回最近一周内的热门话题
function weekly(options,callback){
    var url=trends.url+'weekly.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=trends;