const eKey = document.querySelector('.card.key .t1');  
const eLocation = document.querySelector('.card.location .t1') ; 
const eWhich= document.querySelector('.card.which .t1') ; 
const eCode = document.querySelector('.card.code .t1') ; 
const alert1 = document.querySelector('.alert') ;  
const box = document.querySelector('.box') ;

document.addEventListener('keydown',event => {
    eKey.nextElementSibling.innerHTML = event.key ; 
    eLocation.nextElementSibling.innerHTML = event.location;
    eCode.nextElementSibling.innerHTML = event.code;
    eWhich.nextElementSibling.innerHTML = event.which;
    alert1.classList.add('hide') ; 
    box.classList.remove('hide') ;  
})