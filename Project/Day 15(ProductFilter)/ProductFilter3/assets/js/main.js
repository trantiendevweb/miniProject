const get_search = document.querySelector(" .search  input"); 
const get_product = document.querySelector(" .products " ) ; 


fetch("https://fakestoreapi.com/products ") 
.then(data => { 
    return data.json() ; 
})
.then(datas => 
    datas.forEach( data => {
        let product = document.createElement("div" ) ; 
        product.classList.add("product") ; 
       product.innerHTML = `
       <img src="${data.image}" alt="">
       <div class="info">
           <div class="Name"> ${data.title}</div>
           <div class="Price">${data.price}</div>
       </div>
       `
       get_product.appendChild( product ) ; 
    } ))

    get_search.addEventListener("change", () => {
        
    })