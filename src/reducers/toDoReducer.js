

function toDoReducer (state,action){
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
    
            const newToDo ={
        
                id: new Date().getTime(),
                title: action.payload.title,
                completed: false
        
            };
            return [
                newToDo, 
                ...state
            ]

        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id)

        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo, 
                        completed: !todo.completed
                    }
                }
                return todo
            })
        
        case "EDIT_TODO":
            return state.map(todo => {
                if(todo.id === action.payload.id){
                    return {
                        ...todo,
                        title: action.payload.title
                    }
                }
                return todo
            })


        default: 
            return state;
    }

}

export default toDoReducer