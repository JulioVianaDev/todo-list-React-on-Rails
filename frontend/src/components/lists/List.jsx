import {useState} from 'react'
import ListForm from './ListForm'
function List({id,title,desc,created_at, editList}) {
  const [editing,setEditing] = useState(false)
  return (
    <>
      {
        editing ?
          <>
            <ListForm />
            <button onClick={()=>setEditing(false)}>Cancel</button>
          </>
          :
        <>
          <h3>title: {title} </h3>
          <h3>desc: {desc} </h3>
          <h3>created_at: {created_at} </h3>
          <button onClick={()=>setEditing(true)}>Edit</button>
        </>
      }
    </>
  )
}

export default List