const cards = ()=>{
    
    class Card{
        constructor(img,alt,subtitle,descr,price,wrapperSelector, ...classes){
            this.img = img;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.wrapper  = document.querySelector(wrapperSelector); 
            this.classes = classes;
            this.transfer = 27; 
            this.toUan();
        }
        toUan(){
            this.price = this.price * this.transfer; 
        }


        renderItems(){
            const elem = document.createElement('div');
            if(this.classes.length > 0){//work with class
                this.classes.forEach(className => elem.classList.add(className));//Because of ...rest      
            }else{
                elem.classList.add('menu__item');
            }
            
            elem.innerHTML = `
                <img src="img/tabs/${this.img}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price }</span> грн/день</div>
                </div>
            `;
             
            this.wrapper.append(elem);
        }
    }

    new Card(
        'vegy.jpg',
        'vegy', 
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu__field .container',
        'menu__item',
    ).renderItems();

    new Card(
        'elite.jpg',
        'elite', 
        'Меню “Премиум”', 
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        12,
        '.menu__field .container',
        'menu__item',
    ).renderItems();

    new Card(
        'post.jpg',
        'post', 
        'Меню "Постное"', 
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        7,
        '.menu__field .container',
        'menu__item', 
    ).renderItems();
};
export default cards;