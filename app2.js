let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です。');



function addString(strA){
  let addStr = "Hello" + strA;
  return addStr;
}

let alertString;
alertString = addString("Webcamp");

alert(alertString);

let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);