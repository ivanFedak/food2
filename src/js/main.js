
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import form from './modules/form';
// import cardsFetch from './modules/cardsFetch';
import slider from './modules/slider';
import slider2 from './modules/slider2';

window.onload = function(){
    tabs();
    timer();
    modal();

    form();
    slider();
    slider2();
    // cardsFetch();
};