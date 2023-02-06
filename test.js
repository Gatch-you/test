"use strict";
/*function hoge(){
  const num: number = 123;

  console.log(num);
  
  const name: string = "taro";
  console.log(name);

}
*/
exports.__esModule = true;
function flameLeaning() {
    var string = "Hello Typescript";
    console.log(string);
    var number = 1109;
    console.log(number);
    var StringArray = ["Hello", "Typescript"];
    console.log(StringArray[0] + " " + StringArray[1]);
    var numberArray = [1, 2, 3, 4];
    console.log(numberArray[3]);
    var Stringlist = {
        language: "japanese",
        country: 'japan'
    };
    Stringlist.secoundLanguage = 'English'; //オプショナル?には後から追加可能
    console.log(Stringlist.secoundLanguage);
}
flameLeaning();
var japan = {
    capiral: 'Tokyo',
    language: 'japanease',
    name: 'japan',
    population: 100000000
};
console.log(japan.name);
//ナイトよりの人
var Adventure1 = {
    hp: 100,
    sp: 30,
    weapon: 'ひのきのぼう',
    swordSkill: 'にだんぎり'
};
var Adventure2 = {
    hp: 80,
    mp: 60,
    weapon: 'ひのきのつえ',
    magicSkill: 'ファイアボール'
};
console.log(Adventure1);
console.log(Adventure2);

