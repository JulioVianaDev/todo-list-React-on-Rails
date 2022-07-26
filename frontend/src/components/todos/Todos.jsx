import React from 'react'
import { useParams } from 'react-router-dom'
function Todos() {
  const params = useParams()
  const {listId} = params
  return (
    <>
    <p>
      Este Todo pertence a List id {listId}
    </p>
    </>
  )
}

export default Todos