/**
 * Created by yanjing on 12/22/15.
 */
var send = require('koa-send');
var route = require('koa-route');

module.exports = function(app){

    // 首页
    app.use(route.get('/', function *(){
        yield this.render('home');
    }));

    // 资源文件
    app.use(route.get('/res/*', function *(){
        yield send(this, this.path.replace(/^\/res/, ''), {
            root: __dirname + '/../../build',
            maxage: 1000 * 60 * 60 * 24 * 30
        });
    }));

};
