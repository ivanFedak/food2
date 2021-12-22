const cardsFetch = ()=>{
       
    const getResoource  = async (url) =>{
        const resolve = await fetch(url);
        if(!resolve.ok){
           throw new Error(`Could not fetch ${url} ${resolve.status}`);
        }
        return await resolve.json();
    };

    getResoource('http://localhost:3000/menu')
        .then(data=>createCard(data));

    function createCard(data){
        data.forEach(item=>{
            const {img,altimg,title,descr,price} = item;
            const elem = document.createElement('div');       
            elem.classList.add('menu__item');//Because of ...rest      
        
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
export default cardsFetch;