const get_imgfeature =  document.querySelector(".img-feature img") 
const get_prev  = document.querySelector(".img-feature .next" )  
const get_next  = document.querySelector(".img-feature .prev" )  
const get_listImg = document.querySelectorAll(" .list-img img"  ) ; 

console.log(get_listImg)
currentIndex = 0 ; 

function updateImgFeature (index) {
    document.querySelectorAll(" .list-img div"  ).forEach( e => {
        e.classList.remove("active") ; 
    })
   currentIndex = index  ; 
   get_imgfeature.src = get_listImg[index].getAttribute('src')  ; 
   get_listImg[index].parentElement.classList.add("active") ; 
}

get_listImg.forEach(function(e , index ) {
    e.addEventListener("click" , e => {
        updateImgFeature(index) ; 
    }) 
}) 
get_next.addEventListener("click", e => { 
    if (currentIndex == get_listImg.length - 1 ) {
        currentIndex= 0 ; 
    } else {
        currentIndex++ ; 
    }
    updateImgFeature (currentIndex)
})

get_prev.addEventListener("click", e => { 
    if (currentIndex == 0) {
        currentIndex= get_listImg.length - 1 ; 
    } else {
        currentIndex-- ; 
    }
    updateImgFeature (currentIndex)
})