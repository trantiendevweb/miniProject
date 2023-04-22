const imgFeatures = document.querySelector('.img-feature')
const listImg = document.querySelectorAll('.list-image img')

const pre_btn = document.querySelector('.main-slide .prev')
const next_btn = document.querySelector('.main-slide .next')

let currentIndex = 0 ; 

function updateImage(index) {
     // remove active class 
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active') 
    })

    currentIndex = index ; 
    imgFeatures.src = listImg[index].getAttribute('src')
    
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((el,index) => {

    el.addEventListener('click', function () {
        updateImage(index)
    })
})
pre_btn.addEventListener('click', function () {

   if (currentIndex == 0 ) {
    currentIndex = listImg.length -1;
   } else {
    currentIndex-- ; 
   }
   updateImage(currentIndex)
   imgFeatures.style.animation= ``
   setTimeout(() => {
   
        imgFeatures.style.animation =`slideLeft 1s ease`
   },200)
 })
next_btn.addEventListener('click', function () {
    if (currentIndex == listImg.length -1  ) {
     currentIndex =  0;
    } else {
     currentIndex++ ; 
    }
    updateImage(currentIndex)
    imgFeatures.style.animation= ``
    setTimeout(() => {
        
        imgFeatures.style.animation =`slideRight 1s ease`
       },200)
 })
