const range = document.querySelector('.range'); 

const process = document.querySelector('.process span') ; 
const value = document.querySelector('.range  p ')
console.log(value);
const body =  document.querySelector('body' ) ; 
function UpdateProcess (percent) {
    process.style.width = `${percent}%` ; 
    value.innerText = percent ; 
    body.style.background= `linear-gradient(to right, rgba(226, 94, 94,${percent/100}) , rgb(53, 250, 234 ,${percent/100} ) )`
}
range.addEventListener('mousemove', function(e){
 var processWidth = e.pageX  - this.offsetLeft 
var percent = processWidth / this.offsetWidth  * 100
 percent = Math.round(percent) ; 
 console.log(percent)
 UpdateProcess(percent)
})