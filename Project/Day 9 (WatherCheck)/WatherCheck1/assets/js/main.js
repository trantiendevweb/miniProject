const get_city_search = document.querySelector(".city-search");
const get_date_search = document.querySelector(".date-search") ;
const get_value_input = document.querySelector(".content input") ;
const get_temp_search = document.querySelector(".temp-search .value ") ;
const get_short_desc = document.querySelector(".short-desc") ; 
const get_visibility = document.querySelector(".visibility span") ; 
const get_wind = document.querySelector(".wind span") ; 
const get_cloud = document.querySelector(".cloud span") ; 
const get_input = document.querySelector(".content input") ; 



function clearData() {
    get_visibility.innerText=""
    get_wind.innerText=""
    get_cloud.innerText=""
    get_temp_search.innerHTML=""
    get_short_desc.innerText="" 
}
 async function changeWatherUI() {
   let input =  get_value_input.value.trim()  ;
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(apiURL).then(res => res.json() ) ;
    console.log(data) ; 
   if (data.cod == 200) {
    get_city_search.innerText = `${data.name}, ${data.sys.country}` ; 
    get_visibility.innerText = data.visibility + "m"; 
    get_wind.innerText = data.wind.speed + "m/s " ; 
    get_cloud.innerText = data.main.humidity + "%" ; 
    get_temp_search.innerHTML = `${data.main.temp}<sup>o</sup>
    C
    `  ; 
    get_short_desc.innerText = data.weather[0].main ; 
    const date = new Date() ; 
    get_date_search.innerText = date.toUTCString() ; 
   } else {
    get_city_search.innerText = `Nhap sai thong tin` ;
    clearData()
   }
}


get_input.addEventListener("keydown", function(e) { 
    if (e.code === 'Enter') {
        changeWatherUI() ;
    }
})