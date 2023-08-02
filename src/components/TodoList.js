import React from "react";
import Todo from "./Todo";



const TodoList = ({todos,todoDelete,todoToogleCompleted}) => {

 

  return (
    <div>
      <h1 className="text-right">Soy todoList</h1>

      {todos.map(todo => ( 
      <Todo 
        key={todo.id} 
        todo={todo} 
        todoDelete={todoDelete}
        todoToogleCompleted={todoToogleCompleted}
      
      
      /> ))}
    </div>
  );
};

export default TodoList;
