const switchcheck = document.querySelector(".wrap-switch input") ; 
const body = document.querySelector( "body")


function init( ) {
    let mode = localStorage.getItem("mode") ; 
    body.setAttribute("class" , mode)
     if ( mode == "dark") {
        switchcheck.click()
     }
}
init()
switchcheck.addEventListener("click", function(e) { 
  body.classList.toggle("dark") ; 
  let mode = body.getAttribute("class") ? "dark" : " " ; 
  localStorage.setItem("mode" , mode) ; 
})
