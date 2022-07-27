import React,{useState} from 'react'

function TodoForm({addTodo}) {
  const [todo,setTodo]=useState({title: '',rating: 1,price: 0.0,complete: false})
  const handleSubmit=(e)=>{
    e.preventDefault()
    //frontend Validações
    setTodo({...todo,rating: parseInt(todo.rating), price: parseFloat(todo.price)})
    if (todo.rating<1 || todo.rating>5){
      alert('HEY SÓ NUMEROS DE 1 A 5')
    }else{
      addTodo(todo)
      setTodo({title: '',rating: 1,price: 0.0,complete: false})
    }
  }
  return (
    <>
      <h1> Create one Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={todo.title}
          onChange={(e)=>setTodo({...todo,title: e.target.value})}
          required
          placeholder='Title'
        />
        <input
          type='number'
          name='rating'
          value={todo.rating}
          required
          onChange={(e)=>setTodo({...todo,rating: e.target.value})}
        />
        <input
           type='number'
           name='price'
           value={todo.price}
           required
           onChange={(e)=>setTodo({...todo,price: e.target.value})}
        />

        <input type="checkbox" name='complete' value={todo.complete} 
          onChange={(e)=>setTodo({...todo,complete: !todo.complete})}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TodoForm