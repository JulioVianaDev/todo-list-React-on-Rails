import Note from './Note'

export function NotesList({notes,deleteNote,updateNote,}){
  return(
    <>
      {notes.map(n=>
        <Note
          key={n.id}
          {...n}  
          updateNote={updateNote}
          deleteNote={deleteNote}
        />
        
      )}
    </>
  )
}