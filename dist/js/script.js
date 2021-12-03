/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const modal = () => {
  const btns = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const close = modal.querySelector('[data-close]');

  function openModal() {
    modal.classList.remove('hide');
    modal.classList.add('show');
    document.documentElement.style.overflow = 'hidden';
    clearInterval(modalTimer);
    window.removeEventListener('scroll', openByScroll);
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

  close.addEventListener('click', closeModal); //Close

  document.addEventListener('click', outSide); //Close

  document.addEventListener('keydown', closeEsc); //Close

  const modalTimer = setTimeout(openModal, 122000); //Open

  window.addEventListener('scroll', openByScroll); //Open
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

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
  const deadline = '2021-12-04';

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
    const timerWrapper = document.querySelector(selector),
          days = timerWrapper.querySelector('#days'),
          hours = timerWrapper.querySelector('#hours'),
          minutes = timerWrapper.querySelector('#minutes'),
          seconds = timerWrapper.querySelector('#seconds');
    const timeIntrval = setInterval(updateTimer, 1000);
    updateTimer();

    function updateTimer() {
      const getTime = getTimeRemaining(endtime);
      days.innerHTML = getZero(getTime.days);
      hours.innerHTML = getZero(getTime.hours);
      minutes.innerHTML = getZero(getTime.minutes);
      seconds.innerHTML = getZero(getTime.seconds);

      if (getTime.result <= 0) {
        clearInterval(timeIntrval);
      }
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




window.onload = function () {
  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
}();
/******/ })()
;
//# sourceMappingURL=script.js.map