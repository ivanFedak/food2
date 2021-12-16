const form = ()=>{
    
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        postData(form);
    });


    function postData(form) {
        form.addEventListener('submit',function(e){
            e.preventDefault(); 

            const request = new XMLHttpRequest();
            request.open('POST', '/php/server.php');
            request.setRequestHeader('Content-type', 'multipart/form-data'); 
            const formData = new FormData(form);//in inputs must be attribute - "name"
            console.log(formData);
        });
        
    }

};
export default form;