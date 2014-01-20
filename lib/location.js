var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var location={
    url:weiUrls.location.protocol+weiUrls.location.host+weiUrls.location.path,
    base_get_map_image:base_getMapImage,
    geo_ip_to_geo:geo_ipToGeo,
    geo_address_to_geo:geo_addressToGeo,
    geo_gps_to_offset:geo_gpsToOffset,
    geo_is_domestic:geo_isDomestic
};

//生成一张静态的地图图片
function base_getMapImage(options,callback){
    var url=location.url+'base/get_map_image.json';
    packurl.packGetUrl(url,options,callback);
}

//根据IP地址返回地理信息坐标
function geo_ipToGeo(options,callback){
    var url=location.url+'geo/ip_to_geo.json';
    packurl.packGetUrl(url,options,callback);
}

//根据实际地址返回地理信息坐标
function geo_addressToGeo(options,callback){
    var url=location.url+'geo/address_to_geo.json';
    packurl.packGetUrl(url,options,callback);
}

//根据GPS坐标获取偏移后的坐标
function geo_gpsToOffset(options,callback){
    var url=location.url+'geo/gps_to_offset.json';
    packurl.packGetUrl(url,options,callback);
}

//判断地理信息坐标是否是国内坐标
function geo_isDomestic(options,callback){
    var url=location.url+'geo/is_domestic.json';
    packurl.packGetUrl(url,options,callback);
}

