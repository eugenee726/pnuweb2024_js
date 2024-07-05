/*
업다운게임 원리
1. DOM 요소 가져오기
2. 확인 버튼 처리
    - 확인 버튼 내용이 '확인'이 아니면 초기화
    - 랜덤수 생성(초기화되기 전까지 한번만 생성)=>flag변수
    - 텍스트 박스의 숫자 비교 : 크면 다운, 같으면 성공, 작으면 업
    - 비교 후 이미지 변경
3. 성공시 
    - 텍스트 박스 숨김
    - 버튼의 글자 변경
4. 초기화
    - 이미지 What
    - 텍스트 박스가 다시 보이게
    - 버튼의 이름을 확인으로 복구
    - 랜덤 변수가 생성될 수 있도록 => flag변수
*/

document.addEventListener('DOMContentLoaded',()=>{
    
    //1.Dom요소 가져오기
    const img = document.querySelector('img'); //tag selector
    const txt1 = document.querySelector('input[type=number]'); //type selector
    const btok = document.querySelector('#btok'); //id selector
    const btcancel = document.querySelector('button[type=reset]'); //type selector

    //랜덤수 생성 제어 변수
    let flag = true; //flag가 true이면 랜덤수 생성가능, false이면 생성불가

    //랜덤수 생성
    let n = 0;

   /*
   4. 초기화
    - 이미지 What
    - 텍스트 박스가 다시 보이게
    - 버튼의 이름을 확인으로 복구
    - 랜덤 변수가 생성될 수 있도록 => flag변수
    */
    const init = ()=>{
        img.setAttribute("src", "./img/what.png");
        txt1.value = '';
        txt1.style.display = 'inline';
        btok.textContent = '확인';
        btcancel.style.display = 'inline';
        flag = true;
    };

    //2.확인 버튼 처리,여기서 e가 무슨 의미인지 질문??
    btok.addEventListener("click",(e)=>{
        e.preventDefault(); //e는 함수의 event를 의미함, preventDefault는 이벤트가 더이상 진행되지 않게 하는 것

        //확인버튼이 아닐경우
        if (btok.textContent != '확인'){
            init(); //초기화함수 호출
            return ; //리턴은 다른 언어와 같이 중간에  함수에서 빠져나오는 방법
        };
        
        //랜덤수 생성 (초기화되기 전까지 한번만 생성)->flag변수
        if(flag){   
            n = Math.floor(Math.random() * 100) + 1; //1 ~ 100까지의 범위 내 랜덤수 생성
            console.log(n);
            flag = false;
        };

        //숫자 입력 확인
        if(txt1.value == ''){
            alert("숫자를 입력하세요.");
            txt1.focus(); //얘는 뭘까??
            return ; //얘도??
        }

        //비교단계

        let usern = parseInt(txt1.value); //사용자입력수
        console.log(usern);
        if (n  > usern){
            img.setAttribute('src', './img/up.png');
        }else if ( n < usern){
            img.setAttribute('src', './img/down.png');
        }else{
            //성공case
            img.setAttribute('src','./img/good.png');
            //txt1.style.display = 'none';
            btok.textContent = '번호를 다시 생성하세요.';
            //btcancel.style.display = 'none';
        }


    });

})