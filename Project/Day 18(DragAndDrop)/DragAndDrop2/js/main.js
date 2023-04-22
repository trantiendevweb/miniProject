const boxes = document.querySelectorAll('.box'); 
const ListTagets = document.querySelectorAll(".target")
const fileImageUpload = document.querySelector ("#mypicture")


let currentTarget = null ; 
let arrFile = [] ; 
ListTagets.forEach( function (target) {
 target.addEventListener( "dragstart",function(e) {
    this.classList.add("dragging")
    currentTarget = this; 
    console.log(currentTarget)
   
 })
 target.addEventListener( "dragend",function(e) {
    this.classList.remove("dragging")
    console.log(this)
 })
})


boxes.forEach( function ( box) {
    box.addEventListener("dragover" , function(e) { 
            this.appendChild(currentTarget);
    })
} ) 

fileImageUpload.addEventListener("change",function(e) { 
    arrFile = fileImageUpload.files;
   console.log(arrFile.length) ;
   for (let i = 0; i < boxes.length; i++) {
    if (!boxes[i].querySelector('.target')) {
        let img = document.createElement('img');
        img.classList.add('target');
        img.src = URL.createObjectURL( arrFile[i])  
        img.setAttribute('draggable', 'true');
        boxes[i].appendChild(img);
    }
}
})


