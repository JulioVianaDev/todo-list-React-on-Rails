import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
function Todos() {
  const params = useParams()
  const {listId} = params

  const [todos,setTodos] =useState([])
  useEffect(() => {
    axios.get(`/api/lists/${listId}/todos`)
      .then(res=>{
        setTodos(res.data)
      })
      .catch(err => console.log("erro no todos",err))

     
  }, [])
  const addTodo=(todo)=>{
    axios.post(`/api/lists/${listId}/todos`,{todo})
      .then(res=>{
        setTodos([...todos,res.data])
      })
      .catch(err => console.log("erro no todos",err))
  }
  const deleteTodo=(id)=>{
    axios.delete(`/api/lists/${listId}/todos`)
      .then(res=>{
        setTodos(todos.filter(t=>t.id === id))
        alert(res.data.message)
    })
    .catch(err=>console.log('erro no delete todo', err))
  }
  return (
    <>
    <TodoForm
      addTodo={addTodo}
    />
    <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </>
  )
}

export default Todos