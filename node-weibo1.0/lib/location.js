var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var location={
    url:weiUrls.location.protocol+weiUrls.location.host+weiUrls.location.path,
    base_get_map_image:base_getMapImage,
    geo_ip_to_geo:geo_ipToGeo,
    geo_address_to_geo:geo_addressToGeo,
    geo_gps_to_offset:geo_gpsToOffset,
    geo_is_domestic:geo_isDomestic,
    pois_search_by_location:pois_search_byLocation,
    pois_search_by_geo:pois_search_byGeo,
    pois_search_by_area:pois_search_byArea,
    pois_show_batch:pois_showBatch,
    pois_add:pois_add,
    mobile_get_location:mobile_getLocation,
    line_drive_route:line_driveRoute,
    line_bus_route:line_bus_route,
    line_bus_line:line_busLine,
    line_bus_station:line_busStation
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

//根据关键词按地址位置获取POI点的信息
function pois_search_byLocation(options,callback){
    var url=location.url+'pois/search/by_location.json';
    packurl.packGetUrl(url,options,callback);
}

//根据关键词按坐标点范围获取POI点的信息
function pois_search_byGeo(options,callback){
    var url=location.url+'pois/search/by_geo.json';
    packurl.packGetUrl(url,options,callback);
}

//根据关键词按矩形区域获取POI点的信息
function pois_search_byArea(options,callback){
    var url=location.url+'pois/search/by_area.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取POI点的信息
function pois_showBatch(options,callback){
    var url=location.url+'pois/show_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//提交一个新增的POI点信息
function pois_add(options,callback){
    var url=location.url+'pois/add.json';
    packurl.packGetUrl(url,options,callback);
}

//根据移动基站WIFI等数据获取当前位置信息
function mobile_getLocation(options,callback){
    var url=location.url+'mobile/get_location.json';
    packurl.packGetUrl(url,options,callback);
}

//根据起点与终点数据查询自驾车路线信息
function line_driveRoute(options,callback){
    var url=location.url+'line/drive_route.json';
    packurl.packGetUrl(url,options,callback);
}

//根据起点与终点数据查询公交乘坐路线信息
function line_bus_route(options,callback){
    var url=location.url+'line/bus_route.json';
    packurl.packGetUrl(url,options,callback);
}

//根据关键词查询公交线路信息
function line_busLine(options,callback){
    var url=location.url+'line/bus_line.json';
    packurl.packGetUrl(url,options,callback);
}

//根据关键词查询公交站点信息
function line_busStation(options,callback){
    var url=location.url+'line/bus_station.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=location;