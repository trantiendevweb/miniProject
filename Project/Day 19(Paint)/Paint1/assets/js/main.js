const color = document.querySelector("#color") ;
const decrease = document.querySelector("#decrease") ;
const increase = document.querySelector("#increase") ;
const sizeEl = document.querySelector("#size") ; 
const save = document.querySelector("#save") ; 
const clear = document.querySelector("#clear") ; 
const canvas =  document.querySelector("canvas") ; 
const ctx = canvas.getContext("2d") ; 
const eraser = document.querySelector("#eraser")
let Pos1 = {
    x : 0 , 
    y : 0 , 
    
}
let Pos2 = {
    x : 0 , 
    y : 0 , 
    
}
let size  = 10 ; 

let isDrawing = false ; 
let colorPaint = '#000'
canvas.addEventListener("mousedown", function (e ) {  
    Pos1 = {
        x : e.offsetX , 
        y : e.offsetY , 
    }
    isDrawing =true ; 
})
document.addEventListener("mousemove", function (e ) {
   
    if ( isDrawing ) {
        Pos2 = {
            x : e.offsetX , 
            y : e.offsetY ,
        }
        // fill nét vẽ

        ctx.beginPath( );  
        ctx.arc( Pos1.x, Pos1.y, size , 0 , 2 *Math.PI)
        ctx.fill() ; 
        ctx.fillStyle = colorPaint ; 
        // vẽ outline
        ctx.beginPath( );  
        ctx.moveTo( Pos1.x,  Pos1.y) ;
        ctx.lineTo(Pos2.x,Pos2.y) ; 
        ctx.strokeStyle = colorPaint
         ctx.stroke() ;
        ctx.lineWidth = 20 ; 
        Pos1.x = Pos2.x   ;
        Pos1.y = Pos2.y  ;
    }

} )
document.addEventListener("mouseup", function (e ) {
    isDrawing =false ; 

} )

color.addEventListener("change" , function (  e) { 
    colorPaint = e.target.value ;  
})
eraser.addEventListener("click" , function ( e) {
    colorPaint = '#fff'
})


decrease.addEventListener("click" , function ( e ) { 
    if ( size > 5 ) {
        size -= 5 ; 
    } else {
        size = 5; 
    }
    sizeEl.innerHTML =size
})
increase.addEventListener("click" , function ( e ) { 
    if ( size < 30 ) {
        size += 5 ; 
    } else {
        size = 30; 
    }
    sizeEl.innerHTML =size
    })
clear.addEventListener("click" , function ( e ) { 
   let canvasReact = canvas.getClientRects()[0] ; 
   console.log(canvasReact);
    ctx.clearRect(0 , 0 ,  canvasReact.width, canvasReact.height ) ;
} )
save.addEventListener("click" , function ( e ) { 
    let output =  canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); ; 
    save.setAttribute("href" , output) ; 
    console.log(output) ;  
 })
