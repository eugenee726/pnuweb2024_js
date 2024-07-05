document.addEventListener("DOMContentLoaded", ()=>{
    //1.Dom 요소 가져오기
    const txt1 = document.querySelector('#txt1');
    const btAdds = document.querySelectorAll('.btADD');
    const btDels = document.querySelectorAll('.btDel');
    const btChanges = document.querySelectorAll('.btChange');
    
    // 배열 생성
    let arr = [];

    //오프젝트 만들기
    let obj = {
        '사과' : '🍎',
        '바나나' : '🍌',
        '오렌지' : '🍊',
        '오이' :'🥒',
        '당근' :'🥕',
        '가지' :'🍆',
        '브로콜리' :'🥦',
    };

    for (let bt of btAdds){
        bt.addEventListener("click", ()=>{
            console.log(bt.textContent);

            // if(bt.textContent == '사과'){
            //     arr.push('🍎')
            // }else if(bt.textContent == '바나나'){
            //     arr.push('🍌')
            // }else if(bt.textContent == '오렌지'){
            //     arr.push('🍊')
            // } else if(bt.textContent == '수박'){
            //     arr.push('🍉')
            // }
            // console.log(arr);
            arr.push(obj[bt.textContent]);

            txt1.value = arr.join(' ');
        });
    }

    for (let bt of btDels){
        bt.addEventListener('click', ()=>{

            const btkey = bt.textContent.replace('삭제', '');
            console.log(btkey)

            //arr = arr.filter((item) => {return item != obj[btkey]});
            arr = arr.filter(item => item != obj[btkey]);

            console.log(arr);
            txt1.value = arr.join(' ');

        });
    }

    for (let bt of btChanges){
        bt.addEventListener('click', ()=>{
            const w1 = bt.textContent.split('→')[0];
            const w2 = bt.textContent.split('→')[1];
            console.log(w1, w2);
            //삼항연산
            //arr = arr.map((item)=>{return item == obj[w1] ? obj[w2]: item});
            arr = arr.map(item=>  item == obj[w1] ? obj[w2]: item);
            console.log(arr);
            txt1.value = arr.join(' ')
        });
    }
});