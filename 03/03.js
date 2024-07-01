// console.log("외부 파일")
//domcontentloaded = dom 형성 완료
// document.addEventListener("DOMContentLoaded",function () {
//     console.log("안녕")
// }); //이게 함수 끝!
// = funtcion () {} == ()=>{}
    document.addEventListener("DOMContentLoaded",()=>{
       console.log("화살표 함수!")
       
       //변수선언 getelementbyid 대신 queryselector 사용권고
       const msg = document.querySelector('#msg');
       const bt = document.querySelector('button'); //tag selector사용
       
       msg.innerHTML = '<h1>안녕</h1>';
    //    msg.textContent = '<h1>안녕</h1>';

    bt.addEventListener("click", ()=>{
        if (msg.innerHTML == '안녕')
            msg.innerHTML = "잘가~~";
        else msg.innerHTML = "안녕"
    });

    });

