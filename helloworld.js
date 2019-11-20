//  教程连接 https://www.bilibili.com/video/av38379328/?p=4
// https://ts.xcatliu.com/introduction/what-is-typescript
// https://www.itying.com/category-84-b0.html?t=baidu&bd_vid=7329924666795200321
console.log('hello');
var num = 123;
num = 234;
// 定义数组
var arr = [1, 3, 4, 5];
var arr1 = [1, 1, 4, 5];
// 元组类型 -- 属于数组的一种
var arr2 = [1, '11', 11];
var arr3 = [1, '11', 33];
// 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
    Flag[Flag["cop"] = 1] = "cop";
})(Flag || (Flag = {}));
var s = Flag.success;
var e = Flag.error;
var c = Flag.cop;
console.log(s, e, c);
var any = 1;
any = 'str';
// 没有object 所以需要设置any类型
any = {
    name: 'name',
    age: 23
};
// 其他数据类型 null 和 undefined never 类型
// 定义未赋值就是 undefined
var num1;
console.log(num1);
var num2;
num2 = 123;
console.log(num2);
// 一类元素可以设置多个类型
var num3;
console.log(num3);
num3 = 133;
// void 类型 没有任何类型，一般用于定义方法的时候方法没有返回值
function run() {
    console.log('run');
}
run();
function run1() {
    console.log('run1');
    return '234';
}
console.log(run1());
var a;
a = null;
var a1;
