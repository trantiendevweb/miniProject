const get_color = document.querySelector("#color ") ; 
const get_decrease =  document.querySelector("#decrease ") ; 
const get_increase = document.querySelector("#increase ") ;  
const get_size = document.querySelector("#size ") ; 
const get_eraser = document.querySelector("#eraser" )  ; 
const get_clear = document.querySelector("#clear ") ;  
const get_save = document.querySelector("#save ") ;  
const get_canvas = document.querySelector("canvas") ;  

console.log( get_decrease )

let Pos1 = {
    x  : 0 , 
    y : 0  ,
}
let Pos2 = { 
    x  : 0  , 
    y  : 0 , 
}
let isDrawing = false ; 
let color = "#000000" ; 
let size = 20 ; 

get_canvas.addEventListener("mousemove", function (e ) { 
    let ctx   =  get_canvas .getContext("2d");
     Pos2 = {
        x : e.offsetX , 
        y : e.offsetY ,  
     }

   // line drawing  
    if (isDrawing) {
        ctx.beginPath();
       ctx.arc(Pos1.x, Pos2.y, size, 0, 2 * Math.PI);
       ctx.fillStyle = color ; 
        ctx.fill() ; 
    
        ctx.beginPath();
        ctx.moveTo(Pos1.x, Pos1.y);
        ctx.lineTo(Pos2.x,Pos2.y);
        ctx.strokeStyle =color ; 
        ctx.stroke();
        Pos1.x = Pos2.x ; 
        Pos1.y = Pos2.y ; 
    }
} ) 


get_canvas.addEventListener("mousedown" , function (e) {
    Pos1 = {
        x : e.offsetX , 
        y : e.offsetY , 
    }
    isDrawing =  true ; 

}) 

get_canvas.addEventListener("mouseup", function (e ) {
    isDrawing =false ; 
} )

get_color.addEventListener("change" ,  function ( e ) {
   color =e.target.value ; 
  
} )
get_eraser.addEventListener("click" , function ( e ) { 
    color = "#FFFFFF" ;
})

get_decrease.addEventListener("click" , function ( e ) {
    if( size > 5 ) {
        size -= 5 ;
    } else {
        size = 5 ;
    }
    get_size.innerText = size ; 
 })
 get_increase.addEventListener("click" , function ( e ) {
    if( size < 30 ) {
        size += 5 ;
        
    } else {
        size = 30 ;   
    }
    get_size.innerText = size ; 
 })

 get_clear.addEventListener("click" , function ( e ) {
    let canvasReact =  get_canvas.getClientRects()[0]; 
    console.log(canvasReact)
    const context = get_canvas.getContext('2d');
   context.clearRect(0, 0, canvasReact.width, canvasReact.height);
 })

 get_save.addEventListener("click" , function ( e ) {
    var image = get_canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    get_save.setAttribute("href" ,image) ; 

  } ) 