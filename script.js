/////digital-clock
function showTime(){

    'use strict';
    let now = new Date(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();

    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    if(seconds < 10){
        seconds = '0' + seconds;
    }

    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;

}

window.onload = function (){
     'use strict';


     setInterval(showTime, 500);
     showTime()
};


/////analog-clock

const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')

function getTime(){
    const now = new Date()
   
    const seconds = now.getSeconds()

    const minutes = now.getMinutes()
    
    const hours = now.getHours()

    const timeInterval = 6

    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval + seconds /10) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2 ) + 'deg)'
}
setInterval(getTime, 100)
getTime()

