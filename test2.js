"use strict";
exports.__esModule = true;
var Male = /** @class */ (function () {
    function Male(name) {
        this.name = name;
    }
    Male.prototype.toString = function () {
        console.log("Monsieur ".concat(this.name));
        return "Monsieur ".concat(this.name);
    };
    return Male;
}());
var Female = /** @class */ (function () {
    function Female(name) {
        this.name = name;
    }
    Female.prototype.toString = function () {
        console.log("Madame ".concat(this.name));
        return "Madame ".concat(this.name);
    };
    return Female;
}());
var male = new Male("太郎");
//↑この: Maleは何? なくても動く
var female = new Female("花子");
//↑この: Femaleは何?　なくても動く
male.toString();
female.toString();
