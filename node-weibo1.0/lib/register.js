var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var register={
    url:weiUrls.register.protocol+weiUrls.register.host+weiUrls.register.path,
    verify_nickname:verifyNickname
};


//验证昵称是否可用，并给予建议昵称
function verifyNickname(options,callback){
    var url=register.url+'verify_nickname.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=register;