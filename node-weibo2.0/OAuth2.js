
var child_pro = require('child_process');
var setting = require('./config/setting.json');
var urlconfig = require('./config/config.json');

var Weibo = {};	
(function(){
	var paras = urlconfig;
	//配置文件key
	Weibo.appKey = {
		"appKey":setting.appKey,
    	"appSecret":setting.appSecret,
    	"redirectUrl":setting.redirectUrl
	};
	//设置GET参数
	Weibo.getGetURL = function(paras){
		var arr = [];
		for(var key in paras){
			arr.push(key + '=' + paras[key]);
		}
		var path = '?client_id=' + Weibo.appKey.appKey + '&redirect_uri=' + Weibo.appKey.redirectUrl;
		return path + arr.join('&');
	};

	//设置POST参数
	Weibo.getPostURL = function(paras){
		if(!paras)
			paras = {};
		paras.client_id = Weibo.appKey.appKey;
		paras.redirect_uri = Weibo.appKey.redirectUrl;
		return paras;
	};

	//启动认证
	Weibo.authorize = function(){
		var path = 'https://api.weibo.com/oauth2/authorize' + Weibo.getGetURL().replace('&','^&');
		child_pro.exec('start '+path);
	};

	for(var classKey in paras){
		//获取class
		var classBody = paras[classKey];
		var className = '';
		for(var name in classBody){
			className = name;
		}
		Weibo[className] = function(){};
		for(var funcName in classBody){
			var funcBody = classBody[funcName];
			for(var f in funcBody){
				Weibo[className][funcBody[f].func] = function(){				
					
				};
			}
		}
	}
})();


console.log(Weibo.Test.authorize.test());
console.log();
console.log(Weibo.Test.access_token());






