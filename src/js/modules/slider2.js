const slider2 = ()=>{
    
    let count = 1,
        offset = 0;

    const slider = document.querySelector('.offer__slider'), 
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slideArea = document.querySelector('.offer__slider-inner'), 
          slides = document.querySelectorAll('.offer__slide'), 
          prevBtn = document.querySelector('.offer__slider-prev'),
          nextBtn = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          width = window.getComputedStyle(slidesWrapper).width; // 650


    if(slides.length < 9){ //if more slides less 9
        total.textContent = `0${slides.length}`;
    }else{
        total.textContent = slides.length;
    }
    //Styles
    slideArea.style.cssText = ` width: ${parseInt(width) * slides.length}px;
                                display: flex;
                                transition: all 0.3s ease; 
                              `;//2600 (4 slide by 650)
    slidesWrapper.style.overflow = 'hidden';                         
        
    slides.forEach(slide=>{
        slide.style.width = width;//fix width for all slides (650px)
    });


    //Dots
    const dotsWrapper = document.createElement('ol');
    const dotsArr = []; 
    dotsWrapper.classList.add('carousel-indicators');
    slider.append(dotsWrapper);

    for (let i = 0; i < slides.length; i++) { //create so many like slides
        const dot = document.createElement('li'); //create
        dot.dataset.slideto =  i + 1; //data-attribe
        dot.classList.add('dot'); //class
        dotsWrapper.append(dot); //to the page
        dotsArr.push(dot); //to Arr
    }
    ////

    sameFun();


    nextBtn.addEventListener('click',function(e){
        //Slider function
        if(offset == parseInt(width) * (slides.length - 1)){ //if last slide
            offset = 0;
        }else{
            offset = offset + parseInt(width); // add 650 every time
        }
        slideArea.style.transform = `translateX(-${offset}px)`;

        //Counter
        if(count == slides.length){ //current slide == length of all slides
            count = 1;
        }else{
            count++;
        }
        sameFun();
    });
    prevBtn.addEventListener('click',function(e){
        //Slider function
        if(offset == 0){ //if first
            offset = parseInt(width) * (slides.length - 1);
        }else{
            offset = offset - parseInt(width);
        }
        if(count < 0){ //current slide < 0 
            count = slides.length - 1; //current slide == the last slide
        }
        slideArea.style.transform = `translateX(-${offset}px)`;

        //Counter
        if(count == 1){ //current slide == 1
            count = slides.length; //the last
        }else{
            count--;
        }
        sameFun();
    });
    
    dotsArr.forEach(dot=>{
        dot.addEventListener('click',function(e){
            const slideTo = e.target.dataset.slideto;
            count = slideTo;
            offset = parseInt(width) * (slideTo - 1);
            slideArea.style.transform = `translateX(-${offset}px)`;
            sameFun();
        });
    });

    function sameFun() {
        if(slides.length < 9){ //if slides less 9
            current.textContent = `0${count}`;
        }else{
            current.textContent = count;
        }

        //Dots
        dotsArr.forEach(dot => dot.classList.remove('_active'));
        dotsArr[count - 1 ].classList.add('_active');
    }
    
};
export default slider2;