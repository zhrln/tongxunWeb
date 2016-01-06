/**
 * Created by yanjing on 12/10/15.
 */

var Layout = function(opts){
    this.init(opts);
    this.template = '';
};

Layout.prototype.init = function(opts){
    $.extend(this, opts);
    this.$el = $(this.el);
    return this;
};

Layout.prototype.render = function(data){
    var tpl = this.template(data || {});
    this.$el.append(tpl);
    return this;
};

Layout.prototype.event = function(){
    // 这里是公共部分
    return this;
};

module.exports = Layout;
