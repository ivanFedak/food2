const modal = ()=>{
    const btns = document.querySelectorAll('[data-modal]');
    const modal = document.querySelector('.modal');
    const close = modal.querySelector('[data-close]');


    function openModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.documentElement.style.overflow = 'hidden';
        clearInterval(modalTimer);
    }
    function closeModal(e) {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.documentElement.style.overflow = '';
    }
    function outSide(e) {
        if(!e.target.closest('.modal__dialog') && !e.target.closest('[data-modal]')){
            closeModal();
        }
    }
    function closeEsc(e) {
        if(e.code === "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    }
    function openByScroll(){
        if(window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
            openModal();
        }
    }

    btns.forEach(btn=>{btn.addEventListener('click',openModal);});
    close.addEventListener('click',closeModal);
    document.addEventListener('click', outSide);
    document.addEventListener('keydown', closeEsc);

    const modalTimer = setTimeout(openModal, 122000);

    window.addEventListener('scroll',openByScroll);
    

};
export default modal;
