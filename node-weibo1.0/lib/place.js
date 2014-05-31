var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var place={
    url:weiUrls.place.protocol+weiUrls.place.host+weiUrls.place.path,
    public_timeline:publicTimeline,
    friends_timeline:friendsTimeline,
    user_timeline:userTimeline,
    poi_timeline:poiTimeline,
    nearby_timeline:nearbyTimeline,
    statuses_show:statuses_show,
    users_how:users_show,
    users_checkins:users_checkins,
    users_photos:users_photos,
    users_tips:users_tips,
    users_todos:users_todos,
    pois_show:pois_show,
    pois_users:pois_users,
    pois_tips:pois_tips,
    pois_photos:pois_photos,
    pois_search:pois_search,
    pois_category:pois_category,
    nearby_pois:nearby_pois,
    nearby_users:nearby_users,
    nearby_photos:nearby_photos,
    nearby_users_list:nearbyUsers_list,
    pois_create:pois_create,
    pois_add_checkin:pois_addCheckin,
    pois_add_photo:pois_addPhoto,
    pois_add_tip:pois_addTip,
    pois_add_todo:pois_addTodo,
    nearby_users_create:nearbyUsers_create,
    nearby_users_destroy:nearbyUsers_destroy
};

//获取最新20条公共的位置动态
function publicTimeline(options,callback){
    var url=place.url+'public_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户与其好友的位置动态
function friendsTimeline(options,callback){
    var url=place.url+'friends_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取某个用户的位置动态
function userTimeline(options,callback){
    var url=place.url+'user_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取某个位置地点的动态
function poiTimeline(options,callback){
    var url=place.url+'poi_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取某个位置周边的动态
function nearbyTimeline(options,callback){
    var url=place.url+'nearby_timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//根据ID获取动态的详情
function statuses_show(options,callback){
    var url=place.url+'statuses/show.json';
    packurl.packGetUrl(url,options,callback);
}

//获取LBS位置服务内的用户信息
function users_show(options,callback){
    var url=place.url+'users/show.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户签到过的地点列表
function users_checkins(options,callback){
    var url=place.url+'users/checkins.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户的照片列表
function users_photos(options,callback){
    var url=place.url+'users/photos.json';
    packurl.packGetUrl(url,options,callback);
}

//（已废弃）获取用户的点评列表
function users_tips(options,callback){
    var url=place.url+'users/tips.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户的todo列表
function users_todos(options,callback){
    var url=place.url+'users/todos.json';
    packurl.packGetUrl(url,options,callback);
}

//获取地点详情
function pois_show(options,callback){
    var url=place.url+'pois/show.json';
    packurl.packGetUrl(url,options,callback);
}

//获取在某个地点签到的人的列表
function pois_users(options,callback){
    var url=place.url+'pois/users.json';
    packurl.packGetUrl(url,options,callback);
}

//（已废弃）获取地点点评列表
function pois_tips(options,callback){
    var url=place.url+'pois/tips.json';
    packurl.packGetUrl(url,options,callback);
}

//获取地点照片列表
function pois_photos(options,callback){
    var url=place.url+'pois/photos.json';
    packurl.packGetUrl(url,options,callback);
}

//按省市查询地点
function pois_search(options,callback){
    var url=place.url+'pois/search.json';
    packurl.packGetUrl(url,options,callback);
}

//获取地点分类
function pois_category(options,callback){
    var url=place.url+'pois/category.json';
    packurl.packGetUrl(url,options,callback);
}

//获取附近地点
function nearby_pois(options,callback){
    var url=place.url+'nearby/pois.json';
    packurl.packGetUrl(url,options,callback);
}

//获取附近发位置微博的人
function nearby_users(options,callback){
    var url=place.url+'nearby/users.json';
    packurl.packGetUrl(url,options,callback);
}

//获取附近照片
function nearby_photos(options,callback){
    var url=place.url+'nearby/photos.json';
    packurl.packGetUrl(url,options,callback);
}

//获取附近的人
function nearbyUsers_list(options,callback){
    var url=place.url+'nearby_users/list.json';
    packurl.packGetUrl(url,options,callback);
}

//添加地点
function pois_create(options,callback){
    var url=place.url+'pois/create.json';
    packurl.packPostUrl(url,options,callback);
}

//签到同时可以上传一张图片
function pois_addCheckin(options,callback){
    var url=place.url+'add_checkin.json';
    packurl.packPostUrl(url,options,callback);
}

//添加照片
function pois_addPhoto(options,callback){
    var url=place.url+'pois/add_photo.json';
    packurl.packPostUrl(url,options,callback);
}

//添加点评
function pois_addTip(options,callback){
    var url=place.url+'pois/add_tip.json';
    packurl.packPostUrl(url,options,callback);
}

//添加todo
function pois_addTodo(options,callback){
    var url=place.url+'pois/add_todo.json';
    packurl.packPostUrl(url,options,callback);
}

//用户添加自己的位置
function nearbyUsers_create(options,callback){
    var url=place.url+'nearby_users/create.json';
    packurl.packPostUrl(url,options,callback);
}

//用户删除自己的位置
function nearbyUsers_destroy(options,callback){
    var url=place.url+'nearby_users/destroy.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=place;