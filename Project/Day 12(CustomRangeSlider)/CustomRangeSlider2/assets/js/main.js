const get_range = document.querySelector('.range') ; 
const get_process= document.querySelector('.process'); 
const get_val = document.querySelector('.range p'); 
const get_body = document.querySelector('body');   
console.log(get_range); 
function UpdateProcess(percent) {
    get_val.innerText = percent ; 
    body.style.background= `linear-gradient(to right, rgba(226, 94, 94,${percent /100}) , rgb(53, 250, 234,${percent /100}) )`
    get_process.style.width = `${percent }%`; 
}
//e.pageX 
get_range.addEventListener('mousemove',function( e) {
   let processWidth = e.pageX - this.offsetLeft  ;
   value = processWidth / this.offsetWidth *100 ;
   let percent = Math.round( value)
   UpdateProcess(percent)
})