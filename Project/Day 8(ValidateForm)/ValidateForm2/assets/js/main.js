const get_UserName = document.querySelector("#username") ;
const get_Email = document.querySelector("#email") ;
const get_Password = document.querySelector("#password") ; 
const get_PasswordConfirm = document.querySelector("#passwordConfirm") ; 
const get_form = document.querySelector("form" )  ; 

function ShowError (input, message) { 
    let Parent = input.parentElement ; 
    let Small = Parent.querySelector("small") ;  
    Parent.classList.add("error") ; 
    Small.innerText = " "  ; 
    Small.innerText = message ; 
 }
function ShowSuccess (input ) {
    let Parent = input.parentElement ; 
    let Small = Parent.querySelector("small") ;  
    Parent.classList.remove("error") ; 
    Small.innerText = "" ;  
}
function CatchEmpty (listInput) {
    let checkEmpty = false  ; 
    
    listInput.forEach (Input => {
        Input.value =   Input.value.trim() ; 
        if ( !Input.value ) {
             checkEmpty = true ; 
            ShowError(Input,"Xin hãy nhập vào trường này") ; 
        }  else {
            ShowSuccess(Input)  ; 
        } 

    })
    return checkEmpty ; 
}
function CatchEmail ( input ) {
    const  regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  ; 
    input.value = input.value.trim() ; 
     const checkmail = regex.test(input.value) ;  
     if (checkmail == true ) {
        ShowSuccess(input)  ; 
     } else {
        ShowError(input,"Xin hãy nhập vào email") ; 
     }
     return !checkmail;
}

function CatchLength(input,min , max ) {
    let check = true ; 
    input.value = input.value.trim() ;  
    let  length  = input.value.length ; 
    if ( length > max ) {
         check = false ;  
        ShowError(input, `Xin hãy nhập vào ít hơn ${max} ký tự`)
    }
    if ( length < min ) {
        check = false ;  
       ShowError(input, `Xin hãy nhập vào ít hơn ${min} ký tự`)
   }
   if ( check == true ) {
     ShowSuccess(input)  ; 
   }
   
   return !check ; 
   
}
function catchMathPassword  (passWord , confirmPassWord) {
    if (passWord.value !== confirmPassWord.value || !passWord.value  || !confirmPassWord.value ) {
       ShowError(confirmPassWord, "Mât khẩu không trùng khớp")
       return true ;  
    } else {
       return false ; 
    }
  }

get_form.addEventListener("submit", e => {
  e.preventDefault()  ; 
let isEmptyError=   CatchEmpty([get_UserName,get_Email,get_Password,get_PasswordConfirm]) ; 
let isEmailError =  CatchEmail(get_Email) ; 
let isLengthError = CatchLength(get_UserName , 5, 50 ) ;  
let isCheckMathError =catchMathPassword(get_Password,get_PasswordConfirm) ; 
  
})



