import {useState} from 'react'
import ListForm from './ListForm'
import { Link } from 'react-router-dom'
function List({id,title,desc,created_at, editList,deleteList}) {
  const [editing,setEditing] = useState(false)
  return (
    <>
      {
        editing ?
          <>
            <ListForm 
              id={id}
              title={title}
              desc={desc}
              editList={editList}
              setEditing={setEditing}
            />
            </>
          :
        <>
        <div className='ml-4 mt-8 border-2 border-gray-700 p-2 max-w-lg rounded-xl'>
          <h4 className='text-4xl text-white md:text-xl'>Id de criação: {id}</h4>
          <h3  className='text-4xl text-white md:text-xl'>title: {title} </h3>
          <h3 className='text-4xl text-white md:text-xl'>desc: {desc} </h3>
          <h3 className='text-4xl text-white md:text-xl'>created: {created_at} </h3>
          <div className='flex-col-reverse	'>
            <div className=''>
              <button 
                      className='m-1 text-white  bg-yellow-700  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                      hover:bg-yellow-800 
                      focus:ring-4 focus:outline-none focus:ring-yellow-300
                      sm:w-auto 
                      dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                      onClick={()=>setEditing(true)}
                      >
                Edit
              </button>
              <button className='m-3 text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={()=>deleteList(id)}>Deletar</button>
              <Link className='m-3 text-white  bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 ' to={`/${id}/todos`}>Todos</Link>
            </div>
          </div>
        </div>
        </>
      }
    </>
  )
}

export default List