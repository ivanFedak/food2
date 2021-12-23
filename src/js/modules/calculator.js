const calculator = ()=>{
    //для мужчин: BMR = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
    //для женщин: BMR = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
   
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ration;
    if(localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    }else{
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if(localStorage.getItem('ration')){
        ration = localStorage.getItem('ration');
    }else{
        ration = 1.375;
        localStorage.setItem('ration', 1.375 ); 
    }

    ///////Vars

    ///////LocalStorage
    function localSetting(selector,activeClass){
        const elements = document.querySelectorAll(selector);
        elements.forEach(elem=>{
            elem.classList.remove(activeClass); 
            if(elem.getAttribute('id') == localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            } 
            if(elem.dataset.ration == localStorage.getItem('ration')){
                elem.classList.add(activeClass);
            }
        });
    }
    localSetting('.calculating__choose-item', 'calculating__choose-item_active');


    //


    function calcTotal() {
        if(!sex || !height || !weight || !age || !ration){ //Not all fields are filled 
            result.textContent = "___";
            return; //break
        }

        if(sex == 'male'){
            result.textContent = Math.floor((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ration);
        }else{ //woman
            result.textContent = Math.floor((447.6 + (9.2 * +weight) + (3.1 * +height) - (4.3 * +age)) * ration);
        }
    }
    calcTotal();
 

    function getBtnValue(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        document.querySelector(parentSelector).addEventListener('click',(e )=>{ //delegation
            if(e.target.closest('.calculating__choose-item')){
                if(e.target.dataset.ration){ //contain's data attribure
                    ration = +e.target.dataset.ration; //get ration
                    localStorage.setItem('ration', +e.target.dataset.ration); 
                }else{
                    sex = e.target.id; //get sex
                    localStorage.setItem('sex', e.target.id); 
                }
                elements.forEach(elem=>elem.classList.remove(activeClass)); //remove Classes
                e.target.classList.add(activeClass); //add Class
                calcTotal();
            }
        });
    }
    getBtnValue('#gender', 'calculating__choose-item_active');
    getBtnValue('.calculating__choose_big', 'calculating__choose-item_active');


    function getInputValue(inputSelector){
        const input = document.querySelector(inputSelector);
        input.addEventListener('input',function(e){
            //regular
            input.value = input.value.replace(/\D/g, ''); //can't write not a number
            if(input.value.match(/\D/g)){ //we write not a number (\D)
                console.log('Error');
            }
            // 
            switch(input.getAttribute('id')){
                case 'height': //#height
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break; 
            }
            calcTotal();
        });
    }
    getInputValue('#height');
    getInputValue('#weight');
    getInputValue('#age');
};
export default calculator;