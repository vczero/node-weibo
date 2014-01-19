var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var common={
    url:weiUrls.common.protocol+weiUrls.common.host+weiUrls.common.path,
    code_to_location:codeToLocation,
    get_city:getCity,
    get_province:getProvince,
    get_country:getCountry,
    get_timezone:getTimezone
};

//通过地址编码获取地址名称
function codeToLocation(options,callback){
    var url=common.url+'code_to_location.json';
    packurl.packGetUrl(url,options,callback);
}

//获取城市列表
function getCity(options,callback){
    var url=common.url+'get_city.json';
    packurl.packGetUrl(url,options,callback);
}

//获取省份列表
function getProvince(options,callback){
    var url=common.url+'get_province.json';
    packurl.packGetUrl(url,options,callback);
}

//获取国家列表
function getCountry(options,callback){
    var url=common.url+'get_country.json';
    packurl.packGetUrl(url,options,callback);
}

//获取时区配置表
function getTimezone(options,callback){
    var url=common.url+'get_timezone.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=common;