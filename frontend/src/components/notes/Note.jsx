import {useState} from 'react'
import { NoteForm } from './NoteForm'

export default function Note({id,body,subject,todo_id,deleteNote,updateNote}){
  const [edit,setEdit] = useState(false)  
  return(
    <>
      {edit ?
        <>
          <NoteForm
            id={id}
            body={body}
            subject={subject}
            setEdit={setEdit}
            todo_id={todo_id}
            updateNote={updateNote}
          />
        </>
        :
        <>
          <h1>{subject}</h1>
          <h2>{body}</h2>
          <button onClick={()=> setEdit(true)} >Editar</button>
          <button onClick={() => deleteNote(id)}>Delete</button>
        </>
      }
    </>
  )
}