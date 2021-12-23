const calculator = ()=>{
    //для мужчин: BMR = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
    //для женщин: BMR = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
   
    const result = document.querySelector('.calculating__result span');
    let sex = 'female', height, weight, age, ration = 1.375;

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


    function getStaticInfo(parentSelector, activeClass) {
        const elements = document.querySelectorAll(`${parentSelector} div`);

        document.querySelector(parentSelector).addEventListener('click',(e )=>{ //delegation
            if(e.target.closest('.calculating__choose-item')){
                if(e.target.dataset.ration){ //contain's data attribure
                    ration = +e.target.dataset.ration; //get ration
                }else{
                    sex = e.target.id; //get sex
                }
                elements.forEach(elem=>elem.classList.remove(activeClass)); //remove Classes
                e.target.classList.add(activeClass); //add Class
                calcTotal();
            }
        });
    }
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');


    function getInputValue(inputSelector){
        const input = document.querySelector(inputSelector);
        input.addEventListener('input',function(e){
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