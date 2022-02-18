const boardInput=document.getElementById('title-board')
const addBoardBtn=document.getElementById('add-board')
const colorInput=document.getElementById('color')
// const changeColorBtn=document.getElementById('add-color')

const addTaskBtn=document.getElementById('add-task')
const saveTaskBtn=document.querySelector('.save-task')


const titleInput=document.getElementById('title-task')
const titleDate=document.getElementById('title-date')
const description=document.getElementById('textarea')


const main=document.querySelector('.main')

let boards

let tasks

// let modals

!localStorage.boards ? boards = [] : boards = JSON.parse(localStorage.getItem('boards'))


function Board(description){
    this.description = description
}

// function Task(title, date, tag){
//     this.title = title,
//     this.date = date,
//     this.tag = tag
// }


const createBoard = (board, index) =>{
    return `
   
        <div class="main-item">
            <ul class="header-item">
               <li class="title" contenteditable="true"> ${board.description} </li>
               <li class="add-setting">...
                   <ul>
                       <div class="drop-item">
                           <input type="color" id="color">
                           <li id="add-color" onclick="changeColor()">Change color</li>
                           <li class="close" onclick="deleteBoard(${index})"> X </li>
                       </div>             
                    </ul>
               </li>
           </ul>
       <hr>
           <div class="list">
               <!-- <div class="list-item">              
                        
               </div> -->
           </div>                                        
               <div id="add-task" onclick="addTask()"> Add another task</div>
      </div>                
  `
}

const addBoard =() =>{
    main.innerHTML=""
    if(boards.length >0){
        boards.forEach((item, index) => {
            main.innerHTML += createBoard(item, index)            
        })
    }
}

addBoard()

const updateLocal = () =>{
     localStorage.setItem('boards', JSON.stringify(boards))
    //  localStorage.setItem('tasks', JSON.stringify(tasks))
     
 }

addBoardBtn.addEventListener('click', () =>{
    boards.push(new Board(boardInput.value))
    updateLocal()
    addBoard()
    boardInput.value=''

})

const deleteBoard = index =>{
   boards.splice(index, 1)
    updateLocal()
    addBoard()
   console.log(index)
}


function addTask(){
    let newTask=document.createElement('div')
        newTask.className='modal-wrapper'
        newTask.innerHTML= `<div class="modal"> <div class="modal-title">
        <input id="title-task"  placeholder="Введите задачу">
        <input id="title-date"  type="date">
        <button class="close-task" >X</button>                                   
</div>              
<hr>
<div class="modal-tag">
    <label for="tag"> Укажите тег:</label>
    <select name="tag" id="" /*multiple*/>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="JavaScript">JavaScript</option>
    </select>
</div>
<div class="modal-description">
    <textarea   id="textarea" placeholder="Введите описание"></textarea>
</div>
 <button class="save-task" onclick="saveTask()">Save</button>  </div> `

        document.body.append(newTask)
}

 

/*Здесь я застряла*/

            /*ВАРИАНТ 2*/


// function createTask(title, date, tag){
//     const task={
//         title: title,
//         date: date,
//         tag: tag
// }
//        tasks.push(task)
//        console.log(tasks)
//        updateLocal()
//        return task

// }

// function saveTask(){
//     let titleValue=titleInput.value
//     let dateValue=titleDate.value
//     createTask(titleValue, dateValue)
//     renderTask()
// }

         /*ВАРИАНТ 1*/



// function saveTask(){
//     if (document.querySelector('.modal-wrapper')){
//         document.querySelector('.modal-wrapper').remove()
//     }
//     tasks.push(new Task(titleInput.value))  /*Warum?*/
//     console.log(tasks) 
// }

// window.addEventListener('click', (e) =>{
//      if (e.target.classList.contains('save-task')){                  
//       saveTask()
     
// }})



