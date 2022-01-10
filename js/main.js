const main = document.querySelector('main');
const menus = document.querySelectorAll('nav span');
const numbers = document.querySelectorAll('.screen span');
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(()=>{
    //setTime함수로 시간,분,초 값 배열로 반환
    const times = setTime();
    let hr = times[0];
    //반환된 숫자값들을 반복을 돌며 값을 보정하여 선택자의 순번에 맞게 적용
    times.forEach((time, index) =>getTime(time, index));

    //조건식과 그에 매칭되는 클래스명을 객체형태로 묶어서 배열로 저장
    const data = [
        {condition: hr >= 5 && hr < 11, name: 'morning'},
        {condition: hr >= 11 && hr<15, name: 'afternoon'},
        {condition: hr >=16 && hr<19, name: 'evening'},
        {condition: hr >= 19 || hr<5, name: 'night'},
    ]

    //해당 배열을 반복돌면서 main,menus를 활성화
    data.forEach((item, index)=>{
        if(item.condition){
            main.className="";
            main.classList.add(item.name);

            for(let menu of menus) menu.classList.remove("on");
            menus[index].classList.add("on");

        }
    })

    //현재 메인의 클래스명이 afternoon일때만 추가로 dark_text클래스 추가
    if(main.classList.contains('afternoon')){
        main.classList.add('dark_text');
    }else{
        main.classList.remove('dark_text');
    }


    // if(hr >= 5 && hr < 11){
        //혹시라도 있을지모르는 클래스명 싹다 비우기
    //     main.className = "";
    //     main.classList.add('morning');
    // }
    // if(hr >= 11 && hr<15){
    //     main.className = "";
    //     main.classList.add("afternoon");
    // }
    // if(hr >=16 && hr<19){
    //     main.className = "";
    //     main.classList.add('evening');
    // }
    // if(hr >= 19 || hr<5){
    //     main.className ="";
    //     main.classList.add('night');
    // }


    // if(hr < 10) hr ='0'+hr;
    // if(min < 10) min = '0'+min;
    // if(sec < 10) sec = '0'+sec;

    // time[0].innerText = hr;
    // time[1].innerText = min;
    // time[2].innerText = sec;
},1000)

//시간값을 구해서 [시간,분,초]로 변환하는 함수
function setTime(){
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let hr2 = null;

    
    if(hr >= 12){
        hr2 = hr-12;
        pm.classList.add("on");
        am.classList.remove("on");
    }else{
        hr2 = hr;
        am.classList.add("on");
        pm.classList.remove("on");
    }

    return[hr, min, sec];
}

//변환할 숫자가밧과 순서값을 인수로 받아 숫자를 보정하고 해당 인수의 부모요소에 값 적용하는 함수
function getTime(num, index){
    if(num<10) num = '0'+num;
    numbers[index].innerText = num;
}












