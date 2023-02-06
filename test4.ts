//オブジェクト
/*
const value1 = 123;
const value2 = 123;
console.log(value1 == value2);

const object1 = {value: 123};
const object2 = {value: 123};
console.log(object1 == object2);


let box: { width: number; height: number };
//       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^型注釈
box = ({width:100, height:40});

function square(width: number, height: number) {
    return width * height;
}

console.log(square(30, 20));
*/


const xy: {x: number; y:number} = {x: 1, y:2};
let onlyX: {x: number};
onlyX = xy;

//インデックス型
let obj: {
    [key: string]: number;
};

console.log(obj = {a: 1, b: 2});
console.log(obj.c = 4);
console.log(obj["d"] = 5);
//全部OK↑


//オブジェクトの分割代入

const item = {price: 100};
const price = item.price;
console.log(price);
