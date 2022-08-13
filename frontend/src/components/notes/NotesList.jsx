import Note from './Note'

export function NotesList({notes,deleteNote,updateNote,}){
  return(
    <>
      <div className='grid md:grid-cols-5 grid-cols-1 m-4 lg:grid-cols-4  '>
      {notes.map(n=>
        <Note
          key={n.id}
          {...n}  
          updateNote={updateNote}
          deleteNote={deleteNote}
          notes={notes}
        />
        )}
      </div>
    </>
  )
}