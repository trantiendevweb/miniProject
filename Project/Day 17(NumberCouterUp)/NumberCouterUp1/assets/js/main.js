const fb = document.querySelector("  .facebook h1 ")
const ins = document.querySelector("  .instagram  h1 ") 
const ytb = document.querySelector(" .youtube h1 ") 
const numlisteners

function countUp ( el  ) {
    let to =  el.innerText ; 
     let count = 0 ; 
     let step = Math.round(to / 500) ;   
     let interval = setInterval( function () { 
        if ( count < to ) {
            count += step  ; 
            el.innerText =   count ;  
        } else {
            el.innerText = to ; 
            clearInterval(interval) ;  
        }
     } , 1 )
}
countUp(fb);
countUp(ins )
countUp( ytb)