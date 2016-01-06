/**
 * Created by yanjing on 12/22/15.
 */
var ejs = require('koa-ejs');
var gzip = require('koa-gzip');
var conditional = require('koa-conditional-get');
var etag = require('koa-etag');
var koa = require('koa');
var app = koa();

var routes = require('./routes');

// GZIP ETAG
app.use(gzip());
app.use(conditional());
app.use(etag());

// HTML compress
app.use(require('koa-compress')());
app.use(require('koa-html-minifier')({
    collapseWhitespace: true,
    removeComments: true
}));

// 渲染
ejs(app, {
    root: 'src/pages',
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: false
});

// 路由
routes(app);

app.listen(3003, () => {
    console.log('listening on port 3003');
});
