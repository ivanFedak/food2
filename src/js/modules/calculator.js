const calculator = ()=>{
    //для мужчин: BMR = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
    //для женщин: BMR = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
    /*
        Минимальный уровень активности — 1.2
        Низкий уровень активности — 1.375
        Средний уровень активности — 1.55
        Высокий уровень — 1.725
        Очень высокий —  1.9
    */
    const height = document.querySelector('#height'),
          weight = document.querySelector('#weight'),
          age = document.querySelector('#age');

    function calc(sex) {
        if(sex == 'male'){
            // const res = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
        }
        if(sex == 'female'){
            //const res = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
            // const res = (447.6 + (9.2 * 55) + (3.1 * 166) - (4.3 * 33)) * 1.9;
            // const res = (447.6 + (9.2 * +weight.value) + (3.1 * +height.value) - (4.3 * +age.value)) * 1.9;
            console.log(Math.floor(res) + ' ккал');
        }
    }

    calc('female');

    

};
export default calculator;