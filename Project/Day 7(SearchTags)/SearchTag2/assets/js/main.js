const content =  document.querySelector('.content')
const getText  = document.querySelector('.input-text')
const removeALL = document.querySelector('.remove-all')
var arrtags = [];
function renderSearch (arr) {
     content.innerHTML = "" ; 
    for (let i  = 0; i < arr.length; i++) { 
        content.innerHTML += 
            ` <li class="search-text">${arr[i]}
            <i class='btn-delete bx bx-x' onclick="removeTag(${i})"'></i>
       </li> `
    }
    content.appendChild(getText) ;}
 

    getText.addEventListener ('keydown', function (e) { 
      if (e.key == 'Enter') {
        arrtags.push(getText.value.trim());
        
        getText.value ="" ;
        renderSearch(arrtags) ; 
        getText.focus() ;
      }
    })

function removeTag(i) {
    arrtags.splice(i,1);
    renderSearch(arrtags) ;
    getText.focus() ;
}
removeALL.addEventListener('click', function () {
    arrtags = [] ; 
    renderSearch(arrtags) ;
    getText.focus() ;
})