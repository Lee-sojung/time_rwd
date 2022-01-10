﻿const time = document.querySelectorAll('.screen span');
const main = document.querySelector('main');
const menus = document.querySelector('nav span');

setInterval(()=>{
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr >= 5 && hr < 11){
        //혹시라도 있을지모르는 클래스명 싹다 비우기
        main.className = "";
        main.classList.add('morning');
    }
    if(hr >= 11 && hr<15){
        main.className = "";
        main.classList.add("afternoon");
    }
    if(hr >=16 && hr<19){
        main.className = "";
        main.classList.add('evening');
    }
    if(hr >= 19 || hr<5){
        main.className ="";
        main.classList.daa('night');
    }

    if(hr < 10) hr ='0'+hr;
    if(min < 10) min = '0'+min;
    if(sec < 10) sec = '0'+sec;

    time[0].innerText = hr;
    time[1].innerText = min;
    time[2].innerText = sec;
},1000)














