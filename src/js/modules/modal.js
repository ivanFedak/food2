const modal = ()=>{
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

    btns.forEach(btn=>{btn.addEventListener('click',openModal);}); //Open
    close.addEventListener('click',closeModal); //Close
    document.addEventListener('click', outSide); //Close
    document.addEventListener('keydown', closeEsc); //Close

    const modalTimer = setTimeout(openModal, 122000); //Open

    window.addEventListener('scroll',openByScroll); //Open
    
};
export default modal;
