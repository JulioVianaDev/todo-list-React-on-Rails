import React,{useState,useEffect} from 'react'
import Modal from '../modal/Modal'
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
        { editList ? <> 
        <Modal
          id={id}
          list={list}
          editList={editList}
          addList={addList}
          setLists={setLists}
          setEditing={setEditing}
        />
        
     </>: null}
    <form onSubmit={handleSubmit} className='mt-5 ml-5 w-2/3'>
    <h1 className='text-4xl text-white text-start md:text-2xl	mt-4 mb-2'>Create your List</h1>
    <div className='mb-6'>
      <label className='block ml-1 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Your Title</label>

        <input
          className='bg-gray-50 border border-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
          name='title'
          value={list.title}
          onChange={(e)=>setLists({...list,title: e.target.value })}
          required
          placeholder='Write your List title...'
        />

      </div>
      <label className=' ml-1 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>Describe what is your list:</label>

        <textarea
               className='bg-gray-50 border border-gray-900 mb-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
               placeholder='Describe here...'
          name='desc'
          value={list.desc}
          onChange={(e)=>setLists({...list,desc: e.target.value })}
          required
        ></textarea>
        <button type='submit'className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >Submit</button>
      </form>
    </>
  )
}

export default ListForm