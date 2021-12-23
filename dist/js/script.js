/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const calculator = () => {
  //для мужчин: BMR = (88.36 + (13.4 x вес, кг) + (4.8 х рост, см) – (5.7 х возраст, лет)) * активность
  //для женщин: BMR = (447.6 + (9.2 x вес, кг) + (3.1 х рост, cм) – (4.3 х возраст, лет)) * активность
  const result = document.querySelector('.calculating__result span');
  let sex = 'female  ',
      height,
      weight,
      age,
      ration; // const height = document.querySelector('#height'),
  //       weight = document.querySelector('#weight'),
  //       age = document.querySelector('#age');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ration) {
      //Not all fields are filled 
      result.textContent = "___";
      return; //break
    }

    if (sex == 'male') {
      result.textContent = (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ration;
    } else {
      //woman
      result.textContent = (447.6 + 9.2 * +weight + 3.1 * +height - 4.3 * +age) * ration;
    }
  }

  calcTotal();

  function getStaticInfo(parentSelector, activeClass) {
    const elements = document.querySelectorAll(`${parentSelector} div`);
    document.querySelector(parentSelector).addEventListener('click', e => {
      //delegation
      if (e.target.closest('.calculating__choose-item')) {
        if (e.target.dataset.ration) {
          //contain's data attribure
          ration = +e.target.dataset.ration; //get ration
        } else {
          sex = e.target.id; //get sex
        }

        elements.forEach(elem => elem.classList.remove(activeClass)); //remove Classes

        e.target.classList.add(activeClass); //add Class

        console.log(ration, sex);
      }
    });
  }

  getStaticInfo('#gender', 'calculating__choose-item_active');
  getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');

  function getInputValue(input) {}
};

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const cards = () => {
  class Card {
    constructor(img, alt, subtitle, descr, price, wrapperSelector) {
      this.img = img;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.wrapper = document.querySelector(wrapperSelector);

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.transfer = 27;
      this.toUan();
    }

    toUan() {
      this.price = this.price * this.transfer;
    }

    renderItems() {
      const elem = document.createElement('div');

      if (this.classes.length > 0) {
        //work with class
        this.classes.forEach(className => elem.classList.add(className)); //Because of ...rest      
      } else {
        elem.classList.add('menu__item');
      }

      elem.innerHTML = `
                <img src="${this.img}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.wrapper.append(elem);
    }

  } ///Get


  const getData = async url => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Error');
    }

    return await res.json();
  };

  getData('http://localhost:3000/menu').then(data => {
    data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new Card(img, altimg, title, descr, price, '.menu__field .container', 'menu__item').renderItems();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/cardsFetch.js":
/*!**************************************!*\
  !*** ./src/js/modules/cardsFetch.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const cardsFetch = () => {
  const getResoource = async url => {
    const resolve = await fetch(url);

    if (!resolve.ok) {
      throw new Error(`Could not fetch ${url} ${resolve.status}`);
    }

    return await resolve.json();
  };

  getResoource('http://localhost:3000/menu').then(data => createCard(data));

  function createCard(data) {
    data.forEach(item => {
      const {
        img,
        altimg,
        title,
        descr,
        price
      } = item;
      const elem = document.createElement('div');
      elem.classList.add('menu__item'); //Because of ...rest      

      elem.innerHTML = `
                <img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                </div>
            `;
      document.querySelector('.menu__field .container').append(elem);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cardsFetch);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const form = () => {
  function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.documentElement.style.overflow = 'hidden';
  }

  function closeModal(e) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.documentElement.style.overflow = '';
  }

  const forms = document.querySelectorAll('form');
  const modal = document.querySelector('.modal');
  const messages = {
    loading: './img/spinner.svg',
    success: 'Мы с вами скоро свяжемся',
    fail: 'Сервер пошёл ко дну'
  };
  forms.forEach(form => {
    bindPostData(form);
  });

  const postData = async (url, data) => {
    const resolve = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });
    return resolve;
  };

  function bindPostData(form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = messages.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
      form.insertAdjacentElement('afterend', statusMessage); /////////Start

      const formData = new FormData(form);
      const obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      const json = JSON.stringify(obj);
      postData('http://localhost:3000/requests', json).then(data => data.json()).then(data => {
        console.log(data);
        showThanksModal(messages.success);
        statusMessage.remove();
      }).catch(e => {
        showThanksModal(messages.fail);
      }).finally(() => {
        form.reset();
      }); ///// End
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    openModal();
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      prevModalDialog.classList.remove('hide');
      thanksModal.remove();
      closeModal();
    }, 4000);
  } // fetch('http://localhost:3000/menu')
  //     .then(data => data.json())
  //     .then(data => console.log(data));

};

/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modal = () => {
  const btns = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');

  function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.documentElement.style.overflow = 'hidden';
    clearInterval(modalTimer);
    window.removeEventListener('scroll', openByScroll);
  }

  function closeModalByX(e) {
    if (e.target.closest('[data-close]')) {
      modal.classList.remove('show');
      modal.classList.add('hide');
      document.documentElement.style.overflow = '';
    }
  }

  function closeModal(e) {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.documentElement.style.overflow = '';
  }

  function outSide(e) {
    if (!e.target.closest('.modal__dialog') && !e.target.closest('[data-modal]')) {
      closeModal();
    }
  }

  function closeEsc(e) {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal();
    }
  }

  function openByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
    }
  }

  btns.forEach(btn => {
    btn.addEventListener('click', openModal);
  }); //Open

  modal.addEventListener('click', closeModalByX); //Close

  document.addEventListener('click', outSide); //Close

  document.addEventListener('keydown', closeEsc); //Close

  const modalTimer = setTimeout(openModal, 122000); //Open

  window.addEventListener('scroll', openByScroll); //Open
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider = () => {
  let count = 0;
  const slides = document.querySelectorAll('.offer__slide'),
        current = document.querySelector('#current'),
        total = document.querySelector('#total'),
        prevBtn = document.querySelector('.offer__slider-prev'),
        nextBtn = document.querySelector('.offer__slider-next'); //Total

  if (slides.length < 9) {
    //if more slides less 9
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  } //


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

    if (count < 9) {
      //if cuurent slide less < 9
      current.textContent = `0${count + 1}`;
    } else {
      current.textContent = count + 1;
    }
  }

  init();
  nextBtn.addEventListener('click', () => {
    count++;

    if (count == slides.length) {
      //current slide == length of all slides
      count = 0;
    }

    init();
  });
  prevBtn.addEventListener('click', () => {
    count--;

    if (count < 0) {
      //current slide < 0 
      count = slides.length - 1; //current slide == the last slide
    }

    init();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/modules/slider2.js":
/*!***********************************!*\
  !*** ./src/js/modules/slider2.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const slider2 = () => {
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

  console.log(width.replace(/\D/g, ''));

  if (slides.length < 9) {
    //if more slides less 9
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  } //Styles


  slideArea.style.cssText = ` width: ${replaceWidth(width) * slides.length}px;
                                display: flex;
                                transition: all 0.3s ease; 
                              `; //2600 (4 slide by 650)

  slidesWrapper.style.overflow = 'hidden';
  slides.forEach(slide => {
    slide.style.width = width; //fix width for all slides (650px)
  }); //Dots

  const dotsWrapper = document.createElement('ol');
  const dotsArr = [];
  dotsWrapper.classList.add('carousel-indicators');
  slider.append(dotsWrapper);

  for (let i = 0; i < slides.length; i++) {
    //create so many like slides
    const dot = document.createElement('li'); //create

    dot.dataset.slideto = i + 1; //data-attribe

    dot.classList.add('dot'); //class

    dotsWrapper.append(dot); //to the page

    dotsArr.push(dot); //to Arr
  } ////


  sameFun();

  function replaceWidth(str) {
    return +str.replace(/\D/g, ''); //650px to 650
  }

  nextBtn.addEventListener('click', function (e) {
    //Slider function
    if (offset == replaceWidth(width) * (slides.length - 1)) {
      //if last slide
      offset = 0;
    } else {
      offset = offset + replaceWidth(width); // add 650 every time
    }

    slideArea.style.transform = `translateX(-${offset}px)`; //Counter

    if (count == slides.length) {
      //current slide == length of all slides
      count = 1;
    } else {
      count++;
    }

    sameFun();
  });
  prevBtn.addEventListener('click', function (e) {
    //Slider function
    if (offset == 0) {
      //if first
      offset = replaceWidth(width) * (slides.length - 1);
    } else {
      offset = offset - replaceWidth(width);
    }

    if (count < 0) {
      //current slide < 0 
      count = slides.length - 1; //current slide == the last slide
    }

    slideArea.style.transform = `translateX(-${offset}px)`; //Counter

    if (count == 1) {
      //current slide == 1
      count = slides.length; //the last
    } else {
      count--;
    }

    sameFun();
  });
  dotsArr.forEach(dot => {
    dot.addEventListener('click', function (e) {
      const slideTo = e.target.dataset.slideto;
      count = slideTo;
      offset = replaceWidth(width) * (slideTo - 1);
      slideArea.style.transform = `translateX(-${offset}px)`;
      sameFun();
    });
  });

  function sameFun() {
    if (slides.length < 9) {
      //if slides less 9
      current.textContent = `0${count}`;
    } else {
      current.textContent = count;
    } //Dots


    dotsArr.forEach(dot => dot.classList.remove('_active'));
    dotsArr[count - 1].classList.add('_active');
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slider2);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const tabs = () => {
  const tabs = document.querySelectorAll('.tabcontent'),
        btnWrapper = document.querySelector('.tabheader__items'),
        btns = document.querySelectorAll('.tabheader__item'); // function createDinamyc() {
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
    btns.forEach(btn => {
      btn.classList.remove('tabheader__item_active');
    });
  }

  function showTabs() {
    let count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabs[count].classList.add('show', 'fade');
    tabs[count].classList.remove('hide');
    btns[count].classList.add('tabheader__item_active');
  }

  hideTabs();
  showTabs();
  btnWrapper.addEventListener('click', function (e) {
    if (e.target.closest('.tabheader__item')) {
      btns.forEach((btn, i) => {
        if (e.target == btn) {
          hideTabs();
          showTabs(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const timer = () => {
  const deadline = '2021-12-24';

  function getTimeRemaining(endtime) {
    const result = Date.parse(endtime) - new Date();
    const days = Math.floor(result / (1000 * 60 * 60 * 24)),
          hours = Math.floor(result / (1000 * 60 * 60) % 24),
          // % 24 отстанот от деления на 24 бо може бути 100 часов
    minutes = Math.floor(result / 1000 / 60 % 60),
          seconds = Math.floor(result / 1000 % 60);
    return {
      'result': result,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
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

    if (getTime.result < 0) {
      clearInterval(timeIntrval);
    } else {
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

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_cardsFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/cardsFetch */ "./src/js/modules/cardsFetch.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_slider2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/slider2 */ "./src/js/modules/slider2.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");










window.onload = function () {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])(); // modal();
  // cards();

  (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])(); // cardsFetch();
  // slider();

  (0,_modules_slider2__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_calculator__WEBPACK_IMPORTED_MODULE_8__["default"])();
};
}();
/******/ })()
;
//# sourceMappingURL=script.js.map