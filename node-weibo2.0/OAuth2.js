
var child_pro = require('child_process');
// var json = {
// 	"appKey":"4263807830",
//     "appSecret":"f314a703b2586510ae62a8baaef1570e",
//     "redirectUrl":"127.0.0.1:3000"
// };


var Weibo = (function(){
	var Weibo = {
		"author": "vczero",
		"time": "2014/6/1"
	};

	Weibo.getGetURL = function(paras){
		var arr = [];
		for(var key in paras){
			arr.push(key + '=' + paras[key]);
		}
		return arr.join('&');
	};

	Weibo.getPostURL = function(paras){
		return paras;
	}

	Weibo.OAuth2 = function(setting){
		if((typeof setting !== 'undefined') && setting.appKey && setting.appSecret && setting.redirectUrl){
			this.appKey = setting.appKey;
			this.appSecret = setting.appSecret;
			this.redirectUrl = setting.redirectUrl;
		}else{
			console.log("请正确配置您的setting文件。");
		}	
	}
	var paras = [
		{
			"OAuth2":[
				{
					"func":"authorize",
					"url":"https://api.weibo.com/oauth2/authorize",
					"method":["GET","POST"]
				},
				{
					"func":"access_token",
					"url":"https://api.weibo.com/oauth2/access_token",
					"method":["POST"]
				},
				{
					"func":"get_token_info",
					"url":"https://api.weibo.com/oauth2/get_token_info",
					"method":["POST"]
				}
			]
		}
	];
	for(var classKey in paras){
		//获取class
		var classBody = paras[classKey];
		var className = '';
		for(var name in classBody){
			className = name;
		}
		Weibo[className] = function(){};
		for(var funcName in classBody){
			var funcBody = classBody[funcName]
			for(var f in funcBody){
				Weibo[className][funcBody[f].func] = function(){
					return funcBody[f].url;
				};
			}
		}
	}
	return Weibo;
})();


console.log(Weibo.OAuth2.authorize());
