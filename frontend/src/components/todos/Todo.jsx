import React from 'react'

function Todo({deleteTodo,id,title,created_at,complete,price,rating,updated_at,list_id}) {
  return (
    <>
      <h2>Todo #{id} {title}</h2>
      <p>Price: ${price}</p>
      <p>{complete ? "Completed" : "Not Complete" } </p>
      <p>Rating: {rating}/5</p>
      <button>Edit</button>
      <button onClick={()=> deleteTodo(id)}>Delete</button>
    </>
  )
}

export default Todo