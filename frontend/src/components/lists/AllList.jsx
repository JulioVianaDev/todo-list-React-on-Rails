import React from 'react'
import List from './List'
function AllList({lists,editList,deleteList}) {
  return (
    <>
      {
        lists.map(l =>
          <List key={l.id} {...l} editList={editList} deleteList={deleteList}/>
        )
      }
    </>
  )
}

export default AllList