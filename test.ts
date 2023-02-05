/*function hoge(){
  const num: number = 123;

  console.log(num);
  
  const name: string = "taro";
  console.log(name);

}
*/

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

    Stringlist.secoundLanguage = 'English';
    console.log(Stringlist.secoundLanguage);
}

flameLeaning();

