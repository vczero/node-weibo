
var child_pro = require('child_process');
// var json = {
	// "appKey":"4263807830",
 //    "appSecret":"f314a703b2586510ae62a8baaef1570e",
 //    "redirectUrl":"127.0.0.1:3000"
// };


var Weibo = (function(){
	var Weibo = {};
		
	//配置文件key
	Weibo.appKey = {
		"appKey":"4263807830",
    	"appSecret":"f314a703b2586510ae62a8baaef1570e",
    	"redirectUrl":"127.0.0.1:3000"
	};

	//设置GET参数
	Weibo.getGetURL = function(paras){
		var arr = [];
		for(var key in paras){
			arr.push(key + '=' + paras[key]);
		}
		var path = 'client_id=' + Weibo.appKey.appKey + '&redirect_uri='
		           + Weibo.appKey.redirectUrl;
		return path + arr.join('&');
	};

	//设置POST参数
	Weibo.getPostURL = function(paras){
		if(!paras)
			paras = {};
		paras.client_id = Weibo.appKey.appKey;
		paras.redirect_uri = Weibo.appKey.redirectUrl;
		return paras;
	}

	var paras = [
		{
			"Test":[
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


// console.log(new Weibo.author);
// console.log(new Weibo.Test);
var Test = Weibo.Test;
// console.log(Test.authorize());

// console.log(Weibo.appKey_get);

console.log(Weibo.getGetURL());
console.log(Weibo.getPostURL());