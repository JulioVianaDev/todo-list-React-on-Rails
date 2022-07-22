import React,{useState,useEffect} from 'react'
import axios from 'axios'
import ListForm from './ListForm'
import AllList from './AllList'
function Lists() {
  const [lists,setLists]= useState([])

  useEffect(()=>{
    axios.get('/api/lists')
    
      .then(res=>setLists(res.data))
      .catch(err=>console.log("erro no get lists: ",err))
    
  },[])

  const addList =(list)=>{
    axios.post('/api/lists',{list})
    .then(res=>{
      setLists([...lists,res.data])
    })
    .catch(err=>console.log(err))
  }

  const editList=(id,list)=>{
    axios.put(`/api/lists/${id}`,{list})
      .then(res=>{
        let newUpdatedLists= lists.map(l=>{
           if (l.id===id){
            return res.data
           }
           return l
        })
        setLists(newUpdatedLists)
      })
      .catch(err=>console.log("erro no edit: ",err))
  }
  return (
    <>
      <ListForm addList={addList}/>
      <AllList lists={lists}
        editList={editList}
      />
      
    </>
  )
}

export default Lists