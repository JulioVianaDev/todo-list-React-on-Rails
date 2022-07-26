import {useState} from 'react'
import ListForm from './ListForm'
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
            <button onClick={()=>setEditing(false)}>Cancel</button>
          </>
          :
        <>
          <h4>Id de criação: {id}</h4>
          <h3>title: {title} </h3>
          <h3>desc: {desc} </h3>
          <h3>created_at: {created_at} </h3>
          <button onClick={()=>setEditing(true)}>Edit</button>
          <button onClick={()=>deleteList(id)}>Deletar</button>
          <hr/>
        </>
      }
    </>
  )
}

export default List