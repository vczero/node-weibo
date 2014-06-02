
var child_pro = require('child_process'),
  https = require('https'),
  querystring = require('querystring'),
  setting = require('./config/setting.json'),
  urlconfig = require('./config/config.json');
    
var Weibo = {};	
(function(){
  var paras = urlconfig;
  Weibo.appKey = {
	"appKey":setting.appKey,
	"appSecret":setting.appSecret,
	"redirectUrl":setting.redirectUrl
  };

  Weibo.getGetURL = function(paras){
	var arr = [];
	for(var key in paras){
	  arr.push(key + '=' + paras[key]);
	}
	var path = '?client_id=' + Weibo.appKey.appKey + '&redirect_uri=' + Weibo.appKey.redirectUrl;
	if(arr)
	  return path + '&' + arr.join('&');
	return path + arr.join('&');
  };

  Weibo.getPostURL = function(paras){
    if(!paras)
	  paras = {};
	paras.client_id = Weibo.appKey.appKey;
	paras.redirect_uri = Weibo.appKey.redirectUrl;
	return paras;
  };

   Weibo.authorize = function(){
	var path = 'https://api.weibo.com/oauth2/authorize' + Weibo.getGetURL().replace('&','^&');
	child_pro.exec('start '+path);
   };

  for(var name in urlconfig){
	var funcBody = urlconfig[name];
	Weibo[name] = {};
	for(var index in funcBody){
	  Weibo[name][funcBody[index].func] = createFunc(funcBody[index]);
	}
  }

  function createFunc(urlParas){
	return function(){
	  var options = {};
	  var post_data = '';
	  options.hostname = urlParas.url.replace('https://','');
	  options.port = 443;
	  options.path = '/';

	  if(urlParas.rmethod[0] === 'GET'){
		options.path = options.path + Weibo.getGetURL(arguments[0]);
		options.method = 'GET';
	  }else{
		options.method = 'POST';
		options.rejectUnauthorized = false;
		var jsonAgr = Weibo.getPostURL(arguments[0]);
		post_data = querystring.stringify(jsonAgr); 
		options.headers = {
		  'Content-Type': 'application/x-www-form-urlencoded', 
		  'Content-Length': post_data.length
		};
	  }

	var req = https.request(options, function(res) {
	  res.on('data', function(data) {
		return data;;
	  });
	});
	  req.end(post_data);
	  req.on('error', function(e) {
		console.error(e);
	  });
	};
  }
})();







