document.addEventListener("DOMContentLoaded", ()=>{
   //DOM 요소 가져오기
   const txt1 = document.querySelector('#txt1');
   const txt2 = document.querySelector('#txt2'); 

   const bt1 = document.querySelector('#bt1');
   const bt2 = document.querySelector('#bt2');
   const bt3 = document.querySelector('#bt3');

   bt1.addEventListener('click', (e)=>{
    e.preventDefault();

    if(txt1.value == '') {
        alert("단어를 입력하세요.");
        txt1.focus();
        return 
    };
    //consoloe 창 확인
    console.log(txt1.value);
    console.log(txt1.value.length);
    console.log(txt1.value[1]);
    console.log(txt1.value.charAt(0));

    for(let c of txt1.value){
        console.log(c);
    }
    
    // //문자열 뒤집기 1: 반복문으로
    // let tm = '';
    // for(let i = txt1.value.length - 1; i >= 0 ; i--){
    //     tm = tm + txt1.value[i];
    // }
    // console.log(tm);
    
    //문자열 변경 => 공백제거로 이용
    let txt = txt1.value.replaceAll(" ", "");

    //문자열 뒤집기 2: 함수로
    tm = txt.split('').reverse().join('');
    console.log(tm);
   
    if (txt == tm){    //문자열 변경 => 공백제거로 이용
        txt2.value = '회문입니다.';
    }else{
        txt2.value = '회문이 아닙니다.';
    }

});

   bt2.addEventListener('click', (e)=>{
    e.preventDefault();

    if (txt1.value == ''){
        alert('숫자를 입력하세요.');
        txt1.focus();
        return ; //여기서 return 은 중도 함수 탈출용
    }
    let sum = 0;
    for(let c of txt1.value){
        if(!isNaN(c)) //숫자이면 isNaN은 false, 그래서 앞에 !를 붙임
            sum = sum + parseInt(c);
    }
    txt2.value = sum;
   });

   bt3.addEventListener('click', ()=>{
    txt1.value = '';
    txt2.value = '';
   });
});