var fs = require('fs');


Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}


var content = fs.read('test.csv');

var contentcheck = content.split("\r\n");
var unique = [];


var unique = contentcheck.unique();


console.log(contentcheck.length);
console.log(unique.length);