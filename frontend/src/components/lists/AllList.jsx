import React from 'react'
import List from './List'
function AllList({lists,editList}) {
  return (
    <>
      {
        lists.map(l =>
          <List key={l.id} {...l} editList={editList}/>
        )
      }
    </>
  )
}

export default AllList