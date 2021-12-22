const form = ()=>{

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

    const postData = async (url,data) =>{
         const resolve = await fetch(url, {
                method: 'POST',
                headers: {'Content-type': 'application/json',},
                body: data
         });
         return resolve;
    };
 
    function bindPostData(form) {
        form.addEventListener('submit',function(e){
            e.preventDefault(); 

            const statusMessage = document.createElement('img');
            statusMessage.src  = messages.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto; 
            `; 
            form.insertAdjacentElement('afterend', statusMessage);

            /////////Start

            const formData = new FormData(form);

            const obj = {};
            formData.forEach(function(value,key) {
                obj[key] = value;
            });
            const json = JSON.stringify(obj);

           
            postData('http://localhost:3000/requests', json)
            .then(data => data.json())
            .then(data =>{
                console.log(data);
                showThanksModal(messages.success);
                statusMessage.remove();  
            }).catch((e)=>{
                showThanksModal(messages.fail);
            }).finally(()=>{
                form.reset(); 
            });
            ///// End

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
    }

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(data => console.log(data));
};
export default form;