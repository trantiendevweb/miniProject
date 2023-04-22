// bài 1
const btn_success =  document.querySelector('.control .success')
const btn_warning  =  document.querySelector('.control .warning ')
const btn_error  =  document.querySelector('.control .error ')


createToast("success","tran tien dep trai",5000) ;
function createToast(status,massage,timeout) {

     let templateInner ; 
    switch (status) {
        case 'success': {
           templateInner = ` <i class='bx bx-check'></i>
           <span class="message"> ${massage} </span>`
           break ; 
        }
        case 'warning': { 
            templateInner = `  <i class='bx bx-error-alt'></i> 
            <span class="message">   ${massage} </span>
            `
            break ; 
        }
        case 'error' : {
            templateInner = `
            <i class='bx bx-bug'></i> 
            <span class="message">  ${massage} </span>
             `
             break ; 
        }
     }
   let toast =    document.createElement("div") 
   toast.classList.add('toast')
   toast.classList.add(status)
   toast.innerHTML = `
       ${templateInner}
       <span class="countdown"> </span>
   `
   var toastList = document.getElementById("toasts")
   toastList.appendChild(toast)
   setTimeout(function() {
    toast.style.animation = 'slide_hide 2s ease forwards' ; 
   },timeout)
}

// bài 2 
