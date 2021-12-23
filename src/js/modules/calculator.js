const calculator = ()=>{
    //для мужчин: BMR = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
    //для женщин: BMR = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
    const result = document.querySelector('.calculating__result span');
    let sex = 'female  ', height, weight, age, ration;

    // const height = document.querySelector('#height'),
    //       weight = document.querySelector('#weight'),
    //       age = document.querySelector('#age');

    function calcTotal() {
        if(!sex || !height || !weight || !age || !ration){ //Not all fields are filled 
            result.textContent = "___";
            return; //break
        }

        if(sex == 'male'){
            result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ration;
        }else{ //woman
            result.textContent = (447.6 + (9.2 * +weight) + (3.1 * +height) - (4.3 * +age)) * ration;
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
                console.log(ration, sex);
            }
        });
    }
    getStaticInfo('#gender', 'calculating__choose-item_active');
    getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');


    function getInputValue(input){
        
    }

};
export default calculator;