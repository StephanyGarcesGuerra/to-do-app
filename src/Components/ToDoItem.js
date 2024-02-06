

function ToDoItem ({todo}){
    return (
        <div>
           <input type ='checkbox' />
           {todo.title}  

            <button type="submit"> Edit </button> 
            <button type="submit"> Delete </button>  

        </div>
    )
}

export default ToDoItem