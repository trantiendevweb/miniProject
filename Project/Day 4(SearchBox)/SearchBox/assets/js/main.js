const btnsearch = document.querySelector('.search-btn')

btnsearch.addEventListener('click', function() {
   this.parentElement.classList.toggle('open')  ;
    this.nextElementSibling.focus()  ;
}) 
btnsearch.addEventListener('mouseleave', function() {
  if ( this.classList.contains('open') == true ) {
    this.parentElement.classList.remove('open') ;
  }
 }) 