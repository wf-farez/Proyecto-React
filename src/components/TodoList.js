import React from "react";
import Todo from "./Todo";



const TodoList = ({todos,todoDelete,todoToogleCompleted,setTodoEdit}) => {

 

  return (
    <div>
      <h4 className="text-right display-4">Lista</h4>

      {
        todos.length === 0
        ? (
       
          <div className="alert alert-primary">
            No hay tareas
          </div>

        )
        :
        (
          todos.map(todo => ( 
            <Todo 
              key={todo.id} 
              todo={todo} 
              todoDelete={todoDelete}
              todoToogleCompleted={todoToogleCompleted}
              setTodoEdit={setTodoEdit}
            
            
            />
        ))
        )

      }

     
    </div>
  );
}

export default TodoList;
