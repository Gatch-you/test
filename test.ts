/*function hoge(){
  const num: number = 123;

  console.log(num);
  
  const name: string = "taro";
  console.log(name);

}
*/


import { type } from "os";
import { mainModule } from "process";
import { isFunctionLike } from "typescript";

function flameLeaning() {
    const string: String ="Hello Typescript";
    console.log(string);

    const number: Number = 1109;
    console.log(number);

    const StringArray: string[] = ["Hello", "Typescript"];
    console.log(StringArray[0] + " " + StringArray[1]);

    const numberArray: Array<number> = [1, 2, 3, 4];
    console.log(numberArray[3]);

    let Stringlist: {
        language: string
        secoundLanguage?: string 
        /*↑オプショナルといって不明瞭な追加するかもしれないプロパティがあっても?をつければエラーにならない*/
        readonly country: string 
        /*↑readonryは読み取り専用で後から定数を変更できない*/
    } = {
        language: "japanese",
        country: 'japan'
    };

    Stringlist.secoundLanguage = 'English'; //オプショナル?には後から追加可能
    console.log(Stringlist.secoundLanguage);
}

flameLeaning();



//型エイリアスについて
//型型に名前をつけて宣言するkとができる。再利用可。「オブジェクトの型」的な使い方ガできる。
type country = {
    capiral: string
    language: string
    name: string
    population: Number
};

const japan: country = {
    capiral: 'Tokyo',
    language: 'japanease',
    name: 'japan',
    population: 100000000,
};
console.log(japan.name);

//合併型と交差型の勉強
type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
}

type Wiherd = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
}
                    //↓ナイトとウィザードのどちらかのTypeを持つ
type Adventure = Knight | Wiherd

                    //↓ナイトとウィザードの両方の方を持つ
type Paradin = Knight & Wiherd

//ナイトよりの人
const Adventure1: Adventure = {
    hp: 100,
    sp: 30,
    weapon: 'ひのきのぼう',
    swordSkill: 'にだんぎり'
};

const Adventure2: Adventure = {
    hp: 80,
    mp: 60,
    weapon: 'ひのきのつえ',
    magicSkill: 'ファイアボール'
};

console.log(Adventure1);
console.log(Adventure2);

let x: String = "goodmorning";
console.log(x.substring(2, 8));


function testing() {
    const count: number = 123;
    console.log(count);
}

testing();

function getIfExist(numbers: number[], search: number): number | undefined {
    if (numbers.includes(search)) {
        console.log(`${search}は配列内に存在します。`);
        return search;
    }
    return undefined;
}
getIfExist([1,2,3,4,], 8);
/*
function hello(person: string) {
    console.log(`${person}さん こんにちは`);
}
hello("羽賀");


function hello(person?: string) {
    if (typeof person === "undefined") {
      person = "anonymous";
      console.log(person);
    } else {
    return "Hello " + person.toUpperCase();
    }
  }
  hello();

*/
function hello(person?: string) {}
hello(); // 引数を省略して呼び出せる


//残余引数
function func(...params: number[]) {
    console.log(...params);
  }
func(1, 2, 3, 4);
