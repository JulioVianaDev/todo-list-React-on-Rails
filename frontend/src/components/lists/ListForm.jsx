import React,{useState,useEffect} from 'react'

function ListForm( {addList,id,title,desc,editList,setEditing } ) { 
  const [list,setLists]= useState({title:'', desc:''})

  useEffect( () => {
    // check if we are editing
    if (id) {
      // setList({ title: title, desc: desc })
      // prepropulate the form with the title and desc
      setLists({ title, desc })
    }
  },[])

  // what happen when we submit the form
  // more front end validations comming 
  const handleSubmit = (e) => {
    // stop from reloading, losing data from state
    // stop put the input in the url
    // setList({ ...list, age: parseInt(list.age)})
    e.preventDefault()

    // check if we are editing 
    if (id) {
      // call the update list function, id list, object that we are updating the item too 
      editList(id, list)

      // close out the form 
      setEditing(false)
    } else {
      // add function, pass in the list im storing in state
      addList(list)
    }

    // clear out the form
    // set the state to initial value
    setLists({ title: '', desc: '' })
  }

  return (
    <> 
      <form onSubmit={handleSubmit}>
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