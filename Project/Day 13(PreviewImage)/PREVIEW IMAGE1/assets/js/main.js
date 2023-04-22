const fileImageUpload = document.querySelector('#mypicture')
const preview = document.querySelector('.container-uploadimage ') 
const checkimg  = document.querySelector(' .container-uploadimage .checkimg' )
const title = document.querySelector('label[for="mypicture" ] ')
console.log(title)
/*
File {name: 'WIN_20221024_10_21_52_Pro.jpg', lastModified: 1666581712469, lastModifiedDate: Mon Oct 24 2022 10:21:52 GMT+0700 (Indochina Time), webkitRelativePath: '', size: 50708, …}
lastModified: 
1666581712469
lastModifiedDate
: 
Mon Oct 24 2022 10:21:52 GMT+0700 (Indochina Time) {}
name: 
"WIN_20221024_10_21_52_Pro.jpg"
size: 
50708
type: 
"image/jpeg"
webkitRelativePath: 
""
[[Prototype]]: 
File 
*/
fileImageUpload.addEventListener('change', function (e) { 
   let file = fileImageUpload.files[0] ;
 
   if (!file.name.endsWith('.jpg')  )  {
    checkimg.innerText = "Ảnh phải có đuôi jpg"
    return ; 
   } else {
    let img=   document.createElement('img') ;
   img.src = URL.createObjectURL(fileImageUpload.files[0])  ; 
    preview.appendChild(img)
    title.innerHTML= ""
    checkimg.innerText =  fileImageUpload.files[0].name ; 
   }
  

}
)