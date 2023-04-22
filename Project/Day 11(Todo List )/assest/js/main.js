const get_input = document.querySelector('.input-todo') ;
const get_btn_add = document.querySelector('.input-todo-add') ;
const get_form = document.querySelector('.form-todo') ; 
const get_todos = document.querySelector('.todos')
get_form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    let val = get_input.value.trim() ; 
    if (val) {
        addTodoElement( {
            text: val , 
        })
        saveTodoList()
    }
  get_input.value = "" ;
  get_input.focus ; 

})  


function addTodoElement(todos ) {
    let li = document.createElement( 'li' ) ; 
    li.innerHTML= ` 
   
        <span>${todos.text}</span>
        <i class='bx bx-trash'></i>
       `
    if ( todos.status == 'completed') {
        li.setAttribute('class' ,'completed' )
    }
    li.addEventListener('click' ,function(){
       this.classList.toggle('completed')
       saveTodoList()
    })
    li.querySelector('i').addEventListener('click' ,function(){
        this.parentElement.remove()
        saveTodoList()
    }) 
    get_todos.appendChild(li) ; 
}

function saveTodoList ( ) { 
    let todoList = document.querySelectorAll('li') ; 
    let todoStorage = [] ;
    todoList.forEach(item => {
        let text = item.querySelector('span').innerText ; 
        let status = item.querySelector('span').getAttribute('class') ;   
        todoStorage.push( {
            text ,
            status
        })

    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage )) ;
    console.log( ) 
}

function init () {
    let data = JSON.parse(localStorage.getItem('todoList')) ;
    data.forEach(function (item) {
        addTodoElement(item) ; 
    })
}
init () 