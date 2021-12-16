const timer = ()=>{


    const deadline = '2021-12-24';

    function getTimeRemaining(endtime) {
        const result = Date.parse(endtime) - new Date();

        const days = Math.floor(result / (1000 * 60 * 60 * 24)),
              hours = Math.floor((result / (1000 * 60 * 60) %  24)), // % 24 отстанот от деления на 24 бо може бути 100 часов
              minutes = Math.floor((result / 1000 / 60) % 60),
              seconds = Math.floor((result / 1000) % 60);
        
        return {
            'result': result,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }
    
    function getZero(num) {
        if(num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }

    function setTimer(endtime, selector) {
        const getTime = getTimeRemaining(endtime);
        const timerWrapper = document.querySelector(selector),
              days = timerWrapper.querySelector('#days'),
              hours = timerWrapper.querySelector('#hours'),
              minutes = timerWrapper.querySelector('#minutes'),
              seconds = timerWrapper.querySelector('#seconds');
       
        const timeIntrval = setInterval(updateTimer, 1000);

        if(getTime.result < 0){
            clearInterval(timeIntrval);
        }else{
            updateTimer();
        }
        

        function updateTimer() {
            const getTime = getTimeRemaining(endtime);

            days.innerHTML = getZero(getTime.days);
            hours.innerHTML = getZero(getTime.hours);
            minutes.innerHTML = getZero(getTime.minutes);
            seconds.innerHTML = getZero(getTime.seconds);
        }
        
    }

    setTimer(deadline, '.timer');
};
export default timer;