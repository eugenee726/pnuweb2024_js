document.addEventListener("DOMContentLoaded", ()=>{
    //1. Dom 요소 가져오기
    const lotto = document.querySelector('#lotto');
    const bt = document.querySelector('#bt');
    
    //로또 번호 저장
    let arr = [];

    bt.addEventListener('click', ()=>{
        //배열 초기화
        arr = []; //arr.length = 0; 동일함
        //로또 번호 생성
        while (arr.length < 7){
            const n = Math.floor(Math.random() * 45) + 1;
            if (!arr.includes(n)){
                arr.push(n);
            }
 
        }
        //숫자 정렬 아래 형식 안 지키면 문자열 정렬
        arr.sort((a, b) => a - b);
        console.log(arr);

        let tm = arr.map(item =>
             `<span class="sp${Math.floor(item / 10)}">${item}</span>`);
        
        //6번째 요소 추가
        tm.splice(6, 0, `<span id='spplus'>+</span>`)
        //tm은 배열이므로 문자열로 전환하면서 lotto안에 넣어야 함
        lotto.innerHTML = tm.join(" ");
    });
});