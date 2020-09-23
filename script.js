setClock();
setInterval(setClock,1000);

function setClock(){
   const time = new Date();
   const secondRatio = (time.getSeconds())/60;
   const minuteRatio = (time.getMinutes() + secondRatio)/60;
   const hourRatio = (time.getHours() + minuteRatio)/12;

   const secondHand = document.getElementById("s");
   const hourHand = document.getElementById("h");
   const minuteHand = document.getElementById("m");
    
    secondHand.style.setProperty('--rotationSecond',secondRatio*360 -180);
    minuteHand.style.setProperty('--rotationMinute',minuteRatio*360 -180);
    hourHand.style.setProperty('--rotationHour',hourRatio*360 -180);

    /*const secondHand = document.querySelector("[data-second]");
   const hourHand = document.querySelector("[data-hour]");
   const minuteHand = document.querySelector("[data-minute]");
    
    secondHand.style.setProperty('--rotationSecond',secondRatio*360 -180);
    minuteHand.style.setProperty('--rotationMinute',minuteRatio*360 -180);
    hourHand.style.setProperty('--rotationHour',hourRatio*360 -180);*/
}

