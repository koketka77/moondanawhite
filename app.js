const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {

    if(!input.value.trim()){
        input.value= ''
        return false
    }
    else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const divsButton = document.createElement('div')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')
    

        div.setAttribute('class', 'block_text')
        deleteButton.setAttribute('class', 'delete_button')
        editButton.setAttribute('class', 'edit_button')
        divsButton.setAttribute('class', 'divs_button')
    
        text.innerHTML = input.value
        deleteButton.innerHTML = 'delete'
        editButton.innerHTML = 'edit'

        divsButton.append(deleteButton, editButton)
        div.append(text, divsButton)
        todoList.prepend(div)

        deleteButton.onclick = () => div.remove(); 
        
        // editButton.addEventListener('click', () => {
        //     const joke = []
        //     prompt('edit your text', div.value)
        //     return
        //     if(!joke.value.trim()){
        //         joke.value= ''
        //         return false
        //     }else{
                
        //     }
        // })
        editButton.addEventListener('click', () => {
            const newText = prompt('Введите новый текст:', text.innerHTML)
            if (newText && newText.trim() !== '') {
              text.innerHTML = newText.trim()
            } else {
              alert('Ошибка: введен пустой текст или пробелы!')
            }
          })



    }
    
    return input.value = ''

   
}
createButton.addEventListener('click', createTodo);


createButton.onclick = () => createTodo();
window.addEventListener('keydown', (KeyboardEvent) => {
    if (event.code === 'Enter')createTodo()
})



// классы

class Animal {
    constructor(name, color){
        this.name = name
        this.color = color
    }
}

class Dog extends Animal{
    constructor(name, height){
        super(name);
    }
    speak(){
        console.log(`${this.name} laet`)
    }
}

let dog = new Dog ('Шарик')
dog.speak()































