const boxes = document.querySelectorAll(".box") ; 
const targetList = document.querySelectorAll(".target") ; 


let currentTarget = null ; 

targetList.forEach(function (target) { 
    target.addEventListener("dragstart", function (e) {
        this.classList.add("dragging");
        currentTarget = this
    })
    target.addEventListener("dragend", function (e) {
        this.classList.remove("dragging");
    })
})

boxes.forEach(function(box) {
    box.addEventListener("dragover", function(e) { 
        if (!box.querySelector(".target")){
            this.appendChild(currentTarget ) ;
           } 
    })
    box.addEventListener ("drop" , function(e) { 
        if (!box.querySelector(".target")){
            this.appendChild(currentTarget ) ;
           }
     }) ; 
} ) 


