let x = 10;
console.log("x1 = ", x);
//var x = 10;
console.log("x2=", x);

//반복문
let arr = [10, 20, 30];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let i in arr) {
    console.log(arr[i]);
}

arr.forEach(item => { console.log(itme) });
arr.forEach((item, i) => { console.log(`${i}=>${item}`) });

for (let i of arr) {
    console.log(i);
}

for (let [i, index] of arr.entries()) {
    console.log(`${i}=>${item}`);
}

document.addEventListener('DOMContentLoaded', () => {
    const msg = document.querySelector('#msg');
    msg.innerHTML = <h1 style="color:blue">메세지 영역</h1>
    msg.textContent = <h1 style="color:blue">메세지 영역</h1>

})