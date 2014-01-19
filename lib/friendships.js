var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var friendships={
    url:weiUrls.friendships.protocol+weiUrls.friendships.host+weiUrls.friendships.path,
    friends:friends,
    friends_remark_batch:friends_remarkBatch,
    friends_in_common:friends_inCommon,
    friends_bilateral:friends_bilateral,
    friends_bilateral_ids:friends_bilateral_ids,
    followers_active:followers_active,
    friends_chain_followers:friendsChain_followers,
    show:show,
    create:createW,
    destroy:destroy,
    followers_destroy:followers_destroy,
    remark_update:remark_update,
    groups:groups,
    groups_timeline:groups_timeline,
    groups_timeline_ids:groups_timeline_ids,
    groups_members:groups_members,
    groups_members_description:groups_members_description,
    groups_is_member:groups_is_member,
    groups_listed:groups_listed,
    groups_show:groups_show,
    groups_show_batch:groups_showBatch,
    groups_create:groups_create,
    groups_update:groups_update,
    groups_destroy:groups_destroy,
    groups_members_add:groups_members_add,
    groups_members_add_batch:groups_members_addBatch,
    groups_members_update:groups_members_update,
    groups_members_destroy:groups_members_destroy,
    groups_order:groups_order
};

//获取用户的关注列表
function friends(options,callback){
    var url=friendships.url+'friends.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取当前登录用户的关注人的备注信息
function friends_remarkBatch(options,callback){
    var url=friendships.url+'friends/remark_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//获取两个用户之间的共同关注人列表
function friends_inCommon(options,callback){
    var url=friendships.url+'friends/in_common.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户的双向关注列表，即互粉列表
function friends_bilateral(options,callback){
    var url=friendships.url+'friends/bilateral.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户双向关注的用户ID列表，即互粉UID列表
function friends_bilateral_ids(options,callback){
    var url=friendships.url+'friends/bilateral/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户的活跃粉丝列表
function followers_active(options,callback){
    var url=friendships.url+'followers/active.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户的关注人中又关注了指定用户的用户列表
function friendsChain_followers(options,callback){
    var url=friendships.url+'friends_chain/followers.json';
    packurl.packGetUrl(url,options,callback);
}

//获取两个用户之间的详细关注关系情况
function show(options,callback){
    var url=friendships.url+'show.json';
    packurl.packGetUrl(url,options,callback);
}

//关注一个用户
function createW(options,callback){
    var url=friendships.url+'create.json';
    packurl.packPostUrl(url,options,callback);
}

//取消关注一个用户
function destroy(options,callback){
    var url=friendships.url+'destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//移除当前登录用户的粉丝
function followers_destroy(options,callback){
    var url=friendships.url+'followers/destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//更新当前登录用户所关注的某个好友的备注信息
function remark_update(options,callback){
    var url=friendships.url+'remark/update.json';
    packurl.packPostUrl(url,options,callback);
}

//获取当前登陆用户好友分组列表
function groups(options,callback){
    var url=friendships.url+'groups.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户某一好友分组的微博列表
function groups_timeline(options,callback){
    var url=friendships.url+'groups/timeline.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登陆用户某一好友分组的微博ID列表
function groups_timeline_ids(options,callback){
    var url=friendships.url+'groups/timeline/ids.json';
    packurl.packGetUrl(url,options,callback);
}

//获取某一好友分组下的成员列表
function groups_members(options,callback){
    var url=friendships.url+'groups/members.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取当前登录用户好友分组成员的分组说明
function groups_members_description(options,callback){
    var url=friendships.url+'groups/members/description.json';
    packurl.packGetUrl(url,options,callback);
}

//判断某个用户是否是当前登录用户指定好友分组内的成员
function groups_is_member(options,callback){
    var url=friendships.url+'groups/is_member.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取某些用户在当前登录用户指定好友分组中的收录信息
function groups_listed(options,callback){
    var url=friendships.url+'groups/listed.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登陆用户某个分组的详细信息
function groups_show(options,callback){
    var url=friendships.url+'groups/show.json';
    packurl.packGetUrl(url,options,callback);
}

//批量获取好友分组的详细信息
function groups_showBatch(options,callback){
    var url=friendships.url+'groups/show_batch.json';
    packurl.packGetUrl(url,options,callback);
}

//创建好友分组
function groups_create(options,callback){
    var url=friendships.url+'groups/create.json';
    packurl.packPostUrl(url,options,callback);
}

//更新好友分组
function groups_update(options,callback){
    var url=friendships.url+'groups/update.json';
    packurl.packPostUrl(url,options,callback);
}

//删除好友分组
function groups_destroy(options,callback){
    var url=friendships.url+'groups/destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//添加关注用户到好友分组
function groups_members_add(options,callback){
    var url=friendships.url+'groups/members/add.json';
    packurl.packPostUrl(url,options,callback);
}

//批量添加用户到好友分组
function groups_members_addBatch(options,callback){
    var url=friendships.url+'groups/members/add_batch.json';
    packurl.packPostUrl(url,options,callback);
}

//更新好友分组中成员的分组说明
function groups_members_update(options,callback){
    var url=friendships.url+'groups/members/update.json';
    packurl.packPostUrl(url,options,callback);
}

//删除好友分组内的关注用户
function groups_members_destroy(options,callback){
    var url=friendships.url+'groups/members/destroy.json';
    packurl.packPostUrl(url,options,callback);
}

//调整当前登录用户的好友分组顺序
function groups_order(options,callback){
    var url=friendships.url+'groups/order.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=friendships;