// 1-mashq
let s = "hello";
let obj = {};

for(let c of s){
  obj[c] = (obj[c] || 0) + 1;
}
console.log(obj);
// 2-mashq
let a = [1,2], b = [3,4];
console.log([...a, ...b]);
// 3-mashq
let arr = [1,2,3];
console.log(arr.includes(2));
// 4-mashq
let arr = [1,2,3];
console.log(arr.map(x=>x*2));
// 5-mashq
let s = "  hello world  ";
console.log(s.trim());
