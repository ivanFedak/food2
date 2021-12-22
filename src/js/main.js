
import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import cards from './modules/cards';
import form from './modules/form';
// import cardsFetch from './modules/cardsFetch';
import slider from './modules/slider';

window.onload = function(){
    tabs();
    timer();
    modal();
    cards();
    form();
    slider();
    // cardsFetch();
};