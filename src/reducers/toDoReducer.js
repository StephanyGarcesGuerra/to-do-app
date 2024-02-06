

function toDoReducer (state,action){
    console.log(action);
    switch (action.type) {
        case "ADD_TODO":
    
    const newToDo =[
        {
            id: new Date().getTime(),
            title: action.payload.title,
            completed: false
        },
        ...state,
    ];
    console.log(newToDo);
    }
    
    return state

}

export default toDoReducer