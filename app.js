let hello = 'Hello Beautiful World';
let int1 = 1;
alert(hello);
alert(int1);
alert(8 + 2);
alert(8 / 2);
alert(8 * 2);
alert(8 - 2);
alert('Hello' + 'World');

let str1 = 'Hi';
let str2 = 'World!!';
alert(str1 + str2);

let orange = 100;
let apple = 100;
if(orange < apple){
  alert('オレンジはリンゴより安いです');
}else if(orange == apple){
  alert('オレンジとリンゴは同じ値段です');
}else{
  alert('オレンジはリンゴより高いです');
}

let max = 100;
let num = 1;
let count = 0;
while(max > num){
  num = num * 2;
  count = count + 1;
}

alert('2をかけて' + max + 'を超えるのに必要だった回数は' + count + 'です。');
