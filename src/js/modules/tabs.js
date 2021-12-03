const tabs = ()=>{

    const tabs = document.querySelectorAll('.tabcontent'),
          btnWrapper = document.querySelector('.tabheader__items'),
          btns = document.querySelectorAll('.tabheader__item');


    // function createDinamyc() {
    //     const el = document.createElement('div');
    //     el.classList.add('tabcontent');
    //     el.innerHTML = `
    //         <img src="img/tabs/elite.jpg" alt="elite">
    //         <div class="tabcontent__descr">
    //             Меню “Премиум1” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!                                     
    //         </div>
    //     `;
    //     document.querySelector('.tabcontainer').append(el);
    // }
    // createDinamyc();

    function hideTabs() {
        tabs.forEach(tab => {
            tab.classList.remove('show');
            tab.classList.add('hide');
        });
        btns.forEach(btn=>{
            btn.classList.remove('tabheader__item_active');
        });
    }

    function showTabs(count = 0) {
        tabs[count].classList.add('show', 'fade');
        tabs[count].classList.remove('hide');
        btns[count].classList.add('tabheader__item_active');
    }

    hideTabs();
    showTabs();

    btnWrapper.addEventListener('click',function(e){
        if(e.target.closest('.tabheader__item')){
            btns.forEach((btn,i)=>{
                if(e.target == btn){
                    hideTabs();
                    showTabs(i);
                }
            });
        }
    });
    


};
export default tabs;