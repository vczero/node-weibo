
var Weibo = require('../../nodeweibo');    // require('nodeweibo') also works if you have installed nodeweibo via npm
var setting = require('./setting.json');   // get setting (appKey, appSecret, etc.)

/*
+-------------------------------------------------
(1)注册账号：http://open.weibo.com/
(2)在./setting.json中配置您的开发账号。
(3)搞清楚微博的认证机制即oauth2.0认证原理。
(4)第3点很重要，确保你理解这种开放方式。
+-------------------------------------------------
*/

/*
    initialize weibo before using it
 */
Weibo.init(setting);


/*
+-------------------------------------------------
例1：开启微博认证
启动认证后，将在浏览器器打开一个窗口，url中含有code参数
注意：运行其中一个例子时，须注释掉另一个例子。
+-------------------------------------------------
*/

Weibo.authorize();


/*
+--------------------------------------------------
例2：需要获取access_token
(1)阅读微博开放平台API
   如：http://open.weibo.com/wiki/OAuth2/access_token，
   将必要的参数写进jsonParas对象。
(2)在回调中打印出获取的数据
(3)code是您浏览器窗口获得的code。
(4)注意：如运行本例子，请注释掉第1个例子，且code职能调用一次，
        会随着认证不断更新。一个用户一个access_token。
+---------------------------------------------------
*/
// var jsonParas = {
//     code:"the value of your browser's parameter code",
//     grant_type:"authorization_code"
// };

// Weibo.OAuth2.access_token(jsonParas,function(data){
//     console.log(data);
// });


/*
    example 3, get public timeline
 */

// // set parameters
// var para = {
//     "source": Weibo.appKey.appKey,
//     "access_token": 'your access_token here'
// };

// // get public timeline
// Weibo.Statuses.public_timeline(para, function(data){
//     console.log(data);
// });