const slider = ()=>{
    
  let count = 0;
  const slides = document.querySelectorAll('.offer__slide'), 
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        nextBtn = document.querySelector('.offer__slider-next');
    
    //Total
    if(slides.length < 9){ //if more slides less 9
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    //


    function hideAll(slides) {
        slides.forEach(slide => {
            slide.classList.add('hide');
        });
    }

    function showCurrent(i) {
        slides[i].classList.remove('hide');

    }

    function init() {
        hideAll(slides);
        showCurrent(count);
        if(count < 9){//if cuurent slide less < 9
            current.textContent = `0${count + 1}`;
        }else{
            current.textContent = count + 1;
        }
    }

    init();


    nextBtn.addEventListener('click', ()=>{
        count++;
        if(count == slides.length){ //current slide == length of all slides
            count = 0;
        }
        init();
    });

    prevBtn.addEventListener('click',()=>{
        count--;
        if(count < 0){ //current slide < 0 
            count = slides.length - 1; //current slide == the last slide
        }
        init();
    });

};
export default slider;