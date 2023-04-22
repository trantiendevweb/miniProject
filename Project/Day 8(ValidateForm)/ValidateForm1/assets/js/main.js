const get_UserName = document.querySelector("#username")
const get_Email = document.querySelector("#email") 
const get_Password = document.querySelector("#password")
const get_Confirm = document.querySelector("#confirm") 
const get_form= document.querySelector("form") 
const get_Date = document.querySelector("#date")

function ShowError (input, message) { 
   let Parent = input.parentElement ; 
   let Small = Parent.querySelector("small") ;  
   Parent.classList.add("error") ; 
   Small.innerText = " "  ; 
   Small.innerText = message ; 
}

function ShowSuccess (input) { 
    let Parent = input.parentNode ; 
    let Small = Parent.querySelector("small") ;   
    Parent.classList.remove("error") ; 
    Small.innerHTML= "&#12644"  ; 
}
function checkEmptyError (listInput) {
    let isEmptyError = false ; 
     listInput.forEach(input => {
      
           input.value=   input.value.trim(); 
           if ( !input.value  ) {
            isEmptyError  = true ; 
            ShowError(input,`Vui long nhap vao ${input.id}`) ; 
           } else {
            ShowSuccess(input) ;  
           }
     }); 
     return isEmptyError ; 
}
function checkEmailError (input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    input.value = input.value.trim();
    let checkEmail = regexEmail.test(input.value);
    if (!checkEmail) {
      ShowError(input, "Please enter a valid email address");
    } else {
      ShowSuccess(input);
    }
    return !checkEmail;
}
  function checkLengthError(input , min , max ) {
      input.value = input.value.trim(); 
     let   checkLength = true ; 
      if (  input.value.length < min ) {
        ShowError(input, `Nhap vào tối thiểu ${min} ký tự`) ;
        checkLength = false ; 
      } 
      if (input.value.length >max ) {
        ShowError(input, `Nhap vào ít hơn ${max} ký tự`) ;
        checkLength = false ; 
      }
      if (checkLength == true ) {
         ShowSuccess(input) ; 
      }
      return !checkLength ; 
  } 
  function checkMathPasswordError (passWord , confirmPassWord) {
    if (passWord.value !== confirmPassWord.value || !passWord.value  || !confirmPassWord.value ) {
       ShowError(confirmPassWord, "Mât khẩu không trùng khớp")
       return true ;  
    } else {
       return false ; 
    }
  }

get_form.addEventListener("submit", function (event) { 
    event.preventDefault() ; 
   let  isEmptyError =  checkEmptyError([get_Email,get_Confirm,get_UserName,get_Password, get_Date]) ;  
   let isEmailError =  checkEmailError(get_Email)  ; 
   let  isLengthError = checkLengthError(get_UserName,5 ,50) ;
   let isCheckMathError =  checkMathPasswordError(get_Password,get_Confirm) ; 
   
   if (!isEmptyError || !isEmailError || !isLengthError ||!isCheckMathError  ) {
      alert("thanh cong")
   }
 })  