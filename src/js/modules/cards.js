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
                <img src="${this.img}" alt="${this.alt}">
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


    ///Get

    const getData = async (url) =>{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error('Error');
        }
        return await res.json();
    };

    getData('http://localhost:3000/menu')
        .then((data)=>{
            data.forEach(({img, altimg, title,descr,price})=>{
                new Card(img,altimg,title,descr,price,'.menu__field .container', 'menu__item').renderItems();
            });
        });

    
};
export default cards;