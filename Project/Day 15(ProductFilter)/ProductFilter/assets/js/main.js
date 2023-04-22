
 fetch ("https://fakestoreapi.com/products")
.then (data => {
    return data.json(); 
}) 
.then (data => { 
    const products = document.querySelector(".products");
    products.innerHTML = " "; 
    // innit
   data.forEach(function (element) {
      let newProduct = document.createElement("div");
      newProduct.classList.add("product");
      newProduct.innerHTML = `
        <img src="${element.image}" alt="">
        <div class="info">
            <div class="name-product">${element.title}</div>
            <div class="price">${element.price} $</div>
        </div> `;
        products.appendChild(newProduct)
    });
    
} )

const search = document.querySelector(" .search input"); 
const rocket = document.querySelector(" .rocket ") ; 
search.addEventListener("focus", function ( ) {
   rocket.style.animation = "fly 3s ease forwards " ; 

})
search.addEventListener("focusout", function ( ) {
    rocket.style.animation = "" ; 
    
 })

search.addEventListener("input", function ( e) {
  let textsearch =  e.target.value.trim().toLowerCase()
 let listProDuctDom = document.querySelectorAll(".product")
 listProDuctDom.forEach( e => {
   
    if (!e.innerText.includes(textsearch)) {
       e.classList.remove("hide")
    } else {
        e.classList.add("hide")
    }
 })

})
