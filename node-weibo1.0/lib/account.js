var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var account={
    url:weiUrls.account.protocol+weiUrls.account.host+weiUrls.account.path,
    get_privacy:getPrivacy,
    profile_school_list:profile_schoolList,
    rate_limit_status:rateLimitStatus,
    profile_email:profile_email,
    get_uid:getUid,
    end_session:endSession
};

//获取当前登录用户的隐私设置
function getPrivacy(options,callback){
    var url=account.url+'get_privacy.json';
    packurl.packGetUrl(url,options,callback);
}

//获取所有的学校列表
function profile_schoolList(options,callback){
    var url=account.url+'profile/school_list.json';
    packurl.packGetUrl(url,options,callback);
}

//获取当前登录用户的API访问频率限制情况
function rateLimitStatus(options,callback){
    var url=account.url+'rate_limit_status.json';
    packurl.packGetUrl(url,options,callback);
}

//获取用户的联系邮箱
function profile_email(options,callback){
    var url=account.url+'profile/email.json';
    packurl.packGetUrl(url,options,callback);
}

//OAuth授权之后，获取授权用户的UID
function getUid(options,callback){
    var url=account.url+'get_uid.json';
    packurl.packGetUrl(url,options,callback);
}

//退出登录
function endSession(options,callback){
    var url=account.url+'end_session.json';
    packurl.packGetUrl(url,options,callback);
}