const content  = document.querySelector('.content'); 
const input = document.querySelector('.content input[placeholder="Type and Enter" ]');
const btn_delete = document.querySelector('.btn-close');
const btn_remove_all = document.querySelector('.btn-remove')

 let arrtag = []; 
function render(Tags) {
    content.innerHTML = "" ; 
   for ( let i = 0; i < arrtag.length; i++ ){
    const tag = Tags[i] ; 
    content.innerHTML += `<li class="tag">
    ${tag}
    <i class="btn-close bx bx-x" onclick="removeTag(${i})"></i>
</li>`
   }
   content.append(input) ;
   input.focus() ; 
} 

input.addEventListener('keydown', function (e) { 
  if ( e.key == 'Enter' ) {
     arrtag.push( input.value.trim() );  
     input.value="";
     render(arrtag) ;
  }
}) ; 


function removeTag(i) {
    arrtag.splice(i, 1) ;  
    render(arrtag); 
}
btn_remove_all.addEventListener('click', function() {  
    arrtag = [];  
   render(arrtag); 
})
