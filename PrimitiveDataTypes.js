// 原始数据类型（Primitive data types）
// 包括： 布尔值、数值、字符串、null、undefined 以及ES6中的新类型 Symbol
// 1. 布尔值
var isDone = false;
// 注意使用构造函数Boolean 创造的对象不是布尔值, new Boolean() 返回的是一个对象
// let createByNewBoolean: boolean = new Boolean(1);
// Error:(10, 5) TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
// 直接调用Boolean也可以返回一个Boolean对象
var createByNewBoolean = Boolean(1);
console.log(createByNewBoolean); // true
// 在TypeScript中，boolean是JavaScript中的基本类型，而 Boolean 是JavaScript中的构造函数。
// 其他基本类型（除了null和undefined） 一样
// 2. 数值
// 使用number定义数值类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6中二进制表示法
var binaryLiteral = 10;
// ES6中八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityLiteral = Infinity;
// 0b1010 和 0o744 是ES6中二进制和八进制表示法，会被编译为十进制数字
// 3. 字符串
// 使用string定义字符串类型
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
console.log(sentence);
// 4. 空值
// JavaScript 是没有空值（Void）的概念，在Typescript中，可以用void表示没有任何返回值得函数；
function alertName() {
    console.log('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为undefined和null
var unusable = null;
unusable = undefined;
// 5. null 和 undefined
var u = undefined;
u = null;
var n = null;
n = undefined;
// 与void的区别是，undefined 和 null 是所有类型的子类型。也就是说undefined类型的变量，可以赋值给number类型的变量
// 这样不会报错
var numTest = undefined;
// 这样不会报错
var u1;
var numTest1 = u1;
// 而void的类型的变量不能赋值给number类型的变量
// let u2:void
// let number:number = u2
// Error:(84, 5) TS2322: Type 'void' is not assignable to type 'number'.
// 6. 任意值 any   用来表示允许赋值为任意类型
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
