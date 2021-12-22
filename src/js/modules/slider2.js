const slider2 = ()=>{
    
    let count = 1,
        offset = 0;

    const slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slideArea = document.querySelector('.offer__slider-inner'), 
          slides = document.querySelectorAll('.offer__slide'), 
          prevBtn = document.querySelector('.offer__slider-prev'),
          nextBtn = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          width = window.getComputedStyle(slidesWrapper).width; // 650

    if(slides.length < 9){ //if more slides less 9
        total.textContent = `0${slides.length}`;
        current.textContent = `0${count}`;
    }else{
        total.textContent = slides.length;
        current.textContent = count;
    }

    slideArea.style.cssText = ` width: ${parseInt(width) * slides.length}px;
                                display: flex;
                                transition: all 0.3s ease; 
                              `;//2600

    slides.forEach(slide=>{
        slide.style.width = width;//fix width for all slides
    });

    nextBtn.addEventListener('click',function(e){
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
        if(slides.length < 9){ //if more slides less 9
            current.textContent = `0${count}`;
        }else{
            current.textContent = count;
        }
    });
    prevBtn.addEventListener('click',function(e){
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
        if(count == 1){ //current slide == 0 
            count = slides.length; //length of all slides
        }else{
            count--;
        }
        if(slides.length < 9){ //if more slides less 9
            current.textContent = `0${count}`;
        }else{
            current.textContent = count;
        }
    });
    
    
};
export default slider2;