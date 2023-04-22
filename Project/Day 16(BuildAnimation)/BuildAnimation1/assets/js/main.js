
var elementAnimations = document.querySelectorAll(".show-on-scroll")



function  toggleAnimation (el) {
    let react =  el.getClientRects()[0] ;  
    var heightsr =  window.innerHeight  ;
    if (!(react.bottom < 0  || react.top > heightsr)) {
        el.classList.add("start")
    } else {
        el.classList.remove("start")
    }
    
}

function startAnimation () {
    elementAnimations.forEach(element => {
        toggleAnimation(element) ; 
    });
 }

 window.onscroll = startAnimation