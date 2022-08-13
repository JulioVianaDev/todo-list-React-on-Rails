import { useState } from 'react';
import { Link } from 'react-router-dom';
import TodoForm from './TodoForm';

export default function Todo({ id, title, price, rating, complete, list_id, updateTodo, deleteTodo }){
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <TodoForm
            id={id}
            title={title}
            price={price}
            rating={rating}
            complete={complete}
            list_id={list_id}
            updateTodo={updateTodo}
            setEdit={setEdit}
            editing={editing}
          />
        </>
        :
        <>
        <div className='ml-4 mt-8 border-2 border-gray-700 p-2 max-w-lg rounded-xl'>
          <h2 className='text-4xl text-white md:text-xl'>Todo #{id} </h2>
          <h2 className='text-4xl text-white md:text-xl'>Title: {title}</h2>
          <p className='text-4xl text-white md:text-xl'>Price: ${price}</p>
          <p className='text-4xl text-white md:text-xl'>Rating: {rating}/5</p>
          <p className='text-4xl text-white md:text-xl'>{ complete ? "Completed" : " Not Complete"}</p>
          <button onClick={() => setEdit(true)}
             className='m-1 text-white  bg-yellow-700  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
             hover:bg-yellow-800 
             focus:ring-4 focus:outline-none focus:ring-yellow-300
             sm:w-auto 
             dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
          >Edit</button>
          <button className='m-3 text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'  onClick={() => deleteTodo(id)}>Delete</button>
          <Link className='m-3 text-white  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 ' to={`/${id}/notes`}>
            Notes
          </Link>
        </div>
        </>
      }
    </>
  )
}
