import { useState } from "react";

function ToDoItem({ todo, dispatch }) {

  const [showEdit, setShowEdit] = useState(false);
  const [newTitle, setNewTitle]= useState(todo.title);
  const handleEdit = () =>{
    dispatch({type: "EDIT_TODO", payload: {id: todo.id, title: newTitle}})
    setShowEdit (!showEdit)
  }

  return (
    <div>
      {showEdit ? (
        <>
            <input type="text" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)}/>
            <button onClick={handleEdit}> Save </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() =>
              dispatch({ type: "TOGGLE_COMPLETED", payload: { id: todo.id } })
            }
          />
          {todo.title}

          <button type="submit" onClick={() => setShowEdit(!showEdit)}>
            {" "}
            Edit{" "}
          </button>
          <button
            type="submit"
            onClick={() =>
              dispatch({ type: "DELETE_TODO", payload: { id: todo.id } })
            }
          >
            {" "}
            Delete{" "}
          </button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
