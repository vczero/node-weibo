var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var messages={
    url:weiUrls.messages.protocol+weiUrls.messages.host+weiUrls.messages.path,
    receive:receive,
    reply:reply,
    send:send,
    invite:invite
};

//粉丝服务
//接收用户私信、关注、取消关注、@等消息接口
function receive(options,callback){
    var url=messages.url+'receive.json';
    packurl.packGetUrl(url,options,callback);
}
//向用户回复私信消息接口
function reply(options,callback){
    var url=messages.url+'reply.json';
    packurl.packPostUrl(url,options,callback);
}
//根据粉丝设置的提醒条件进行私信提醒消息接口
function send(options,callback){
    var url=messages.url+'send.json';
    packurl.packPostUrl(url,options,callback);
}
//好友邀请接口
function invite(options,callback){
    var url=messages.url+'invite.json';
    packurl.packPostUrl(url,options,callback);
}

module.exports=messages;
