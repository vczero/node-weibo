nodeweibo
=========
说明：   
1、自己工作之余写的代码，主要是为方便自己写一些小应用。未完全测试。   
2、只是对新浪微博OAuth2的简单封装。   
3、config中的key为我个人账号的key，仅供测试。如需开发应用，请重新申请。  

####一、环境要求
1、Node.js平台   
2、request库(npm install request)   
####二、API说明
所有API都是按照新浪微博.开放平台开发的。   
![Alt text](weibo.png)     
主要规则为：
![Alt text](api.png)      
如上图：
1、如标号1所示，statuses为命名空间；在statuses命名空间下全部为微博的相关接口。
2、比如，想调用statuses/home_timeline,可以引入命名空间，statuses.home_timeline。   
3、如果如标号3所示，则为statuses.user_timeline_ids(将“/”改为“_”即可)。
 


