import React from 'react'
import List from './List'
function AllList({lists,editList,deleteList}) {
  return (
    <>
    <div className='grid md:grid-cols-5 grid-cols-1 m-4 lg:grid-cols-4  '>

      {
        lists.map(l =>
          <List key={l.id} {...l} editList={editList} deleteList={deleteList}/>
          )
        }
    </div>
    </>
  )
}

export default AllList