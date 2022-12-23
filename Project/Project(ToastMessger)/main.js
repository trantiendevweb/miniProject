
function toast({tittle='',
message='',
type='', 
duration= '',
timeout = '' }){
    const main = document.getElementById('toast') ; 
    if (main){
        const toast = document.createElement('div');  
       const autoRemoveId =  setTimeout (function(){
            main.removeChild(toast) ;  // xóa phần tử khỏi dom 
           },duration + 1000 ); 
           toast.onclick = function(e){
            if ((e.target.closest(".toast_close"))){
                main.removeChild(toast) ;
                clearTimeout(autoRemoveId) ;
            }   
          }
        const icons = {
            success : 'fa-solid fa-check',
            info : 'fa-regular fa-circle-info', 
            warning : 'fa-solid fa-exclamation',    
            error : 'fa-solid fa-bug',  
        }
        const delay = (duration / 1000).toFixed(2) ;
        const icon = icons[type] ; 
        toast.style.animation =`sildeInLeft ease .3s ,fadeOut linear ${timeout}s ${delay}s  forwards `
        toast.style.animation =`box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08)`
        toast.classList.add('toast', `toast--${type}`) ;    
        toast.innerHTML = `
        <div class="toast toast--${type}">
        <div class="toast_icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast_body">
            <h3 class="toast_title">${tittle}</h3>
            <p class="toast_msg">${message}</p>
        </div>  
        <div class="toast_close">
            <i class="fa-solid fa-xmark"></i>
        </div>
    </div>
    ` ;
  
    main.appendChild(toast) ;  // thêm phần tử vào trong main !important
    
    }
}
function showSuccessToast(){
    toast({
        tittle : 'SUCCESS' , 
        message : 'Thành Công' , 
        type : 'success' ,  
        duration : 3000 ,
        timeout : 1000 ,
    }) ;
}
function showErrorToast(){
    toast({
        tittle : 'ERROR' , 
        message : 'Có lỗi' , 
        type : 'error' ,  
        duration : 3000 , 
        timeout : 1000 ,
    }) ;
}
function showInfoToast(){
    toast({
        tittle : 'INFO' , 
        message : 'Thành Công' , 
        type : 'info' ,  
        duration : 3000 , 
        timeout : 1000 ,
    }) ;
}
function showWarningToast(){
    toast({
        tittle : 'WARNING' , 
        message : 'NGUY HIỂM' , 
        type : 'warning' ,  
        duration : 3000 , 
        timeout : 1000 ,
    }) ;
}

