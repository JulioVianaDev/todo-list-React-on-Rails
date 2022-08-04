import { useState,useEffect } from "react"
import TodoForm from "../todos/TodoForm"

export function NoteForm({addNote,id,subject,body,setEdit,updateNote}){
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
      <form onSubmit={handleSubmit}>
        <input
          name="body"
          value={note.subject}
          onChange={(e)=>setNote({...note, subject: e.target.value})}
          required
          placeholder="Body"
        />
        <input
          name="body"
          value={note.body}
          onChange={(e)=>setNote({...note, body: e.target.value})}
          required
          placeholder="Body"
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}