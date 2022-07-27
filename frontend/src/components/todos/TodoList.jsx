import React from 'react'
import Todo from './Todo'
function TodoList({todos,deleteTodo}) {
  return (
    <>
      <h1>All todos</h1>
      {todos.map(t=>
        <Todo 
        key={t.id} 
        {...t}
        deleteTodo={deleteTodo}
        />  
      )}
    </>
  )
}

export default TodoList