const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUI = document.getElementById("todos")


const todos = JSON.parse(localStorage.getItem('todos'))
if(todos){
    todos.forEach(todo=>addTodo(todo))
}








form.addEventListener("submit",(e)=>{
    e.preventDefault()
addTodo()
    
})

function addTodo(todo){
    let todoText = input.value
    if(todo){
        todoText = todo.text;
    }

    if(todoText){
        const todoE1 =document.createElement("li")
        if(todo && todo.completed){
            todoE1.classList.add('completed')
        }
        todoE1.innerHTML =todoText

        todoE1.addEventListener('click',()=>{
            todoE1.classList.toggle("completed")
            updateLS()
        })

        todoE1.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            todoE1.remove();
            updateLS()
        })

        todosUI.appendChild(todoE1);
    input.value = ' ';
   
    updateLS()
    }

    
}


function updateLS(){
    const todosE1  = document.querySelectorAll("li")

    const todos =[]
    todosE1.forEach(todo =>{
        todos.push({
            text:todo.innerText,
            completed:todo.classList.contains('completed')
        })
    })

    localStorage.setItem('todos',JSON.stringify(todos))
}

//JSON.stringify(object)
//JSON.parse(text)

//todos.push(23)

//[{text:Todo1, completed:true},{text:Todo2, completed:false}]






