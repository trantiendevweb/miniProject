const buttonopen = document.querySelector('.open-modal-btn'); 


const modalinner = document.querySelector('.modal_inner ') ; 
console.log(modalinner )
const btnClose1 = document.querySelector('.modal_header ') ; 
const btnClose2 = document.querySelector('.modal_footer') ;

function toggleModal() {
    modalinner.classList.toggle('hide');
    
}

buttonopen.addEventListener('click' , toggleModal )  ;
btnClose1.addEventListener('click' , toggleModal ) ;
btnClose2.addEventListener('click' , toggleModal ) ;