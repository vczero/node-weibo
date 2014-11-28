var urlconfig = require('../lib/config/config.json');

console.log('## nodeweibo Supported API');
console.log('');
console.log('generated on ' + new Date());
console.log('');

for(var name in urlconfig) {
    var funcBody = urlconfig[name];
    console.log('### ' + name + ' class');
    console.log('| function name | doc |');
    console.log('| ------------- | --- |');
    for(var index in funcBody){
        var func_full_name = 'Weibo.' + name + '.' + funcBody[index].func;
        var func_short_path = funcBody[index].path;
        if (func_short_path.indexOf('.json') == func_short_path.length - 5)
            func_short_path = func_short_path.substring(0, func_short_path.length - 5);
        var doc_url = 'http://open.weibo.com/wiki' + func_short_path;
        console.log('| ' + func_full_name + ' | [' + func_short_path + '](' + doc_url + ') | ' );
    }
    console.log('');
}