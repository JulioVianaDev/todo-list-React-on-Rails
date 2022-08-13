import { useState,useEffect } from "react"
import TodoForm from "../todos/TodoForm"

export function NoteForm({addNote,id,subject,body,setEdit,updateNote,edit,}){
  const [note,setNote] = useState({subject: '', body: ''})

  useEffect(()=>{
    if(id){
      setNote({subject,body})
    }
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (id){
      updateNote(id,note)
      setEdit(false)
    }
    else {
      addNote(note)
    }
    setNote({subject: '',body: ''})
  }
  return(
    <>

      {edit?
        <> 
          <div   className="justify-center w-full items-center flex fixed inset-0 z-50 ">
          
          <button className='m-3 text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={()=>setEdit(false)}>Cancel</button>     
          </div>
         <div className="opacity-90 fixed inset-0 z-40 bg-black"></div>
        </>
      :null}
      <form onSubmit={handleSubmit} className='mt-5 ml-5 w-2/3'>
      <h1 className='text-4xl text-white text-start md:text-2xl	mt-4 mb-2'>{ id ? "Update" : "Create"  } Todo</h1>
       
        <input
          name="body"
          value={note.subject}
          onChange={(e)=>setNote({...note, subject: e.target.value})}
          required
          placeholder="Subject"
          className='bg-gray-50 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
       
        />
        <input
          name="body"
          value={note.body}
          onChange={(e)=>setNote({...note, body: e.target.value})}
          requiredsz
          placeholder="Body"
          className='bg-gray-50 mt-2 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
       
        />
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'type='submit'>Enviar</button>
      </form>
    </>
  )
}