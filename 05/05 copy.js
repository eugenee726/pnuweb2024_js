let x = 10;
console.log("x1=", x) ;
//var x = 10;
console.log("x2=", x) ;

//반복문
let arr  = [10, 20, 30] ;

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//전통적인 반복문
console.log("**전통적인 반복문**");
for(let i = 0; i < arr.length ; i++){
    console.log(arr[i])
}

//2. for... in : index를 가져옴
console.log("**for in 반복문**");
for(let i in arr){
    console.log(i);
    console.log(arr[i]);
}

//3.forEach :
console.log("**forEach 반복문**");
arr.forEach(item => console.log(item)); //뒷부분을 callback함수라고 함
//함수의 인수로 들어가면 callback함수
//arr.forEach((item)=>{console.log(itme)});
//인수가 하나면 위에 처럼 괄호 생략 가능
//arr.forEach((item, i)=>{console.log('${i}=>${item}')});

//4. for over
console.log("**for of 반복문**");
for (let i of arr){
    console.log(i);
}

//5.
for (let [i, index] of arr.entries()){
    console.log('${i} => ${item}');
}

document.addEventListener("DOMContentLoaded", ()=>{
    const msg = document.querySelector('#msg');

    //msg.innerHTML = '<h1 style= "color:blue">메시지영역</h1>'
    //msg.textContent = '<h1 style= "color:blue">메시지영역</h1>'
    
})