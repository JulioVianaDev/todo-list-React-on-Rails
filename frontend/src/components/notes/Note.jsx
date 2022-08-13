import {useState} from 'react'
import { NoteForm } from './NoteForm'

export default function Note({id,body,subject,todo_id,deleteNote,updateNote,note,addNote,setNote}){
  const [edit,setEdit] = useState(false)  
  
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
      {edit ?
        <>
           <NoteForm 
              edit={edit}
              handleSubmit={handleSubmit}
              setEdit={setEdit}
              addNote={addNote}
           />
        </>
        :
        <>
        <div className='ml-4 mt-8 border-2 border-gray-700 p-2 max-w-lg rounded-xl'>
          <h1 className='text-4xl text-white md:text-xl'>{subject}</h1>
          <h2 className='text-4xl text-white md:text-xl'>{body}</h2>
          <button className='m-2 text-white  bg-yellow-700  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center 
                      hover:bg-yellow-800 
                      focus:ring-4 focus:outline-none focus:ring-yellow-300
                      sm:w-auto 
                      dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800'
                  onClick={()=> setEdit(true)} >Editar</button>
          <button className='m-3 text-white  bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800' onClick={() => deleteNote(id)}>Delete</button>
        </div>
        </>
      }
    </>
  )
}