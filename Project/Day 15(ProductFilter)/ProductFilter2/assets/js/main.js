fetch ("https://fakestoreapi.com/products")
.then (data => {
    return data.json() ; 
})
.then (data => { 
    const loadingText = document.querySelector(".filter-Product h3")
    loadingText.classList.add("hide")
    const products = document.querySelector(".products")
    data.forEach(element => {
        let product = document.createElement("div") ; 
        product.classList.add("product") ;
        product.innerHTML = ` <img src="${element.image}" alt="">
        <div class="info">
            <div class="name">${element.title}</div>
            <div class="price">${element.price}$</div>
        </div>`
        products.appendChild(product) ;
    });
})

const SearchText = document.querySelector(".search input") ; 
 
SearchText.addEventListener("input" , function (e) {
    let productsDom = document.querySelectorAll(".product") ;
    console.log(productsDom) ;
    let text = e.target.value.trim().toLowerCase() ; 
    productsDom.forEach ( e => {
        if (!e.innerText.includes(text)) {
            e.classList.remove("hide")
        } else {
            e.classList.add("hide")
        }
    })   
})
