import React,{useState} from 'react'

function ListForm( {addList} ) {
  const [list,setLists]= useState({title:'', desc:''})
  const onHandleSubmit =(e)=>{
    e.preventDefault()
    addList(list)
    setLists({title: '', desc:''})
  }
  return (
    <> 
      <form onSubmit={onHandleSubmit}>
        <input
          name='title'
          value={list.title}
          onChange={(e)=>setLists({...list,title: e.target.value })}
          required
          placeholder='Title'
        />
        <textarea
          name='desc'
          value={list.desc}
          onChange={(e)=>setLists({...list,desc: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ListForm