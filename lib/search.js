var packurl=require('../lib/packurl');
var weiUrls=require('../config/weiboUrls').weiUrls;

var search={
    url:weiUrls.search.protocol+weiUrls.search.host+weiUrls.search.path,
    suggestions_users:suggestions_users,
    suggestions_schools:suggestions_schools,
    suggestions_companies:suggestions_companies,
    suggestions_apps:suggestions_apps,
    suggestions_at_users:suggestions_atUsers,
    topics:topics
};

//搜索用户时的联想搜索建议
function suggestions_users(options,callback){
    var url=search.url+'suggestions/users.json';
    packurl.packGetUrl(url,options,callback);
}

//搜索学校时的联想搜索建议
function suggestions_schools(options,callback){
    var url=search.url+'suggestions/schools.json';
    packurl.packGetUrl(url,options,callback);
}

//搜索公司时的联想搜索建议
function suggestions_companies(options,callback){
    var url=search.url+'suggestions/companies.json';
    packurl.packGetUrl(url,options,callback);
}

//搜索应用时的联想搜索建议
function suggestions_apps(options,callback){
    var url=search.url+'suggestions/apps.json';
    packurl.packGetUrl(url,options,callback);
}

//@用户时的联想建议
function suggestions_atUsers(options,callback){
    var url=search.url+'suggestions/at_users.json';
    packurl.packGetUrl(url,options,callback);
}

//搜索某一话题下的微博
function topics(options,callback){
    var url=search.url+'topics.json';
    packurl.packGetUrl(url,options,callback);
}

module.exports=search;