/**
 * Created by zhangrui on 12/22/15.
 */
require("./main.less");

var Layout = require('comm/module.js');
var Template = require('comm/template');
var HomeLayout = new Layout({el: '#main'});

module.exports = $.extend(HomeLayout, {
    template: Template(require('mods/home/main.html')),
    event: function(){
        var _this = this;
    }
});
