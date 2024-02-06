import { useState } from "react"
import ToDoItem from "./ToDoItem"

function ToDoList ({todos, dispatch}){

    const [title, setTitle]= useState("")
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch({type:"ADD_TODO", payload:{title}})
    }

    return(
        <div>

            <h2> Tasks to Complete </h2>

            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <button type="submit"> Add </button>

            </form>
            {
                todos.map(todo => <h5> <ToDoItem todo={todo} /> </h5>)
            }

        </div>

    )
}

export default ToDoList