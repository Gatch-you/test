//tsでのオブジェクト、配列を引数とするコードの書き方 (オブジェクト、配列の分割代入)
/*
function foo({a, b}: {a: number; b: number}) {
    console.log(a + b);
}

foo({a:3, b: 5});

function bar([num1]: number[]) {
    console.log([num1][0] + [num1][3]);
}

bar([1, 2,3, 4])


function foo({a = "string型"}) {
    console.log(a);
}
function bar([a = 0]) {
    console.log(a);
}

foo({});
bar([]);



function foo({a,b} = {a: 5, b: 9}) {
    console.log(a, b);
}
foo();

foo({a: 1, b:4});

function bar([a, b]) {
    console.log(a, b);
}

bar([1, 4]);



type Obj = { a?: number; b?: number };
function foo({ a = 0, b = 0 }: Obj = {}) {
  console.log(a + b);
}
foo();
foo({});
foo({ a: 1 });
foo({ a: 1, b: 2 });

*/

const isOk: boolean = true;
console.log(isOk);


