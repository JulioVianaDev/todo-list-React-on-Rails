import React from 'react'
function Modal({todo,setTodo,id,updateTodo,setEdit,addTodo}) {

  const handleSubmit = (e) => {
    e.preventDefault()
    // front end validations 
    // make sure the rating is a int, and price is a float
    setTodo({ ...todo, rating: parseInt(todo.rating), price: parseFloat(todo.price) })
    
    // make sure rating is 1 - 5
    if (todo.rating < 1 || todo.rating > 5) {
      alert('Hey, rating 1 - 5 only')
    } else {
      if (id) {
        updateTodo(id   , todo)
        setEdit(false)
      } else {
        // adding 
        addTodo(todo)
      }
      setTodo({ title: '', rating: 1, price: 0.0, complete: false })
    }
  }
  return (
    <>
    

        <div   className="justify-center w-full items-center flex fixed inset-0 z-50 ">
        <form onSubmit={handleSubmit} className='mt-5 ml-5 w-2/3'>
      <h1 className='text-4xl text-white text-start md:text-2xl	mt-4 mb-2'>{ id ? "Update" : "Create"  } Todo</h1>
        <input 
          name='title'
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value })}
          required 
          placeholder="Title"
          className='bg-gray-50 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
        />
        <label className='block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Rating out of 1-5</label>
        <input
          type='number'
          name='rating'
          value={todo.rating}
          onChange={(e) => setTodo({...todo, rating: e.target.value })}
          required
          className='bg-gray-50 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
       
          
        />
        <label className='block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Price of todo in $ </label>
        <input 
          type='number'
          name='price'
          value={todo.price}
          onChange={(e) => setTodo({...todo, price: e.target.value })}
          required
          className='bg-gray-50 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
       
        />
        {/* how we are handling booleans */}
        
        <div className='flex '>
          <label className='block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Completed ?</label>
          <input
          type='checkbox'
          name='complete'
          checked={todo.complete}
          onChange={(e) => setTodo({...todo, complete: !todo.complete })}
          className='ml-2 -mt-2'
          />
          </div>
          <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'type='submit'>Submit</button>
          <button className='m-3 text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={()=>setEdit(false)}>Cancel</button>   
      </form>
         </div>
         <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
      </>
    
          
  )
}

export default Modal