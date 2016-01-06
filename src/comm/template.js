/**
 * Created by yanjing on 12/10/15.
 */
'use strict';

module.exports = function(str){
    return Function("obj",
        "var p=[];with(obj){p.push('" +
        str.replace(/[\r\t\n]/g, " ")
            .split("<%").join("\t")
            .replace(/((^|%>)[^\t]*)'/g, "$1\r")
            .replace(/\t=(.*?)%>/g, "',$1,'")
            .split("\t").join("');")
            .split("%>").join("p.push('")
            .split("\r").join("\\'")
        + "');};return p.join('');");
};