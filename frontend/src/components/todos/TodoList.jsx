import Todo from './Todo';

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  return(
    <>
     <div className='grid md:grid-cols-5 grid-cols-1 m-4 lg:grid-cols-4 '>

      { todos.map( t => 
        <Todo
        key={t.id}
        {...t}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        />
        )}
      </div>
    </>
  )
}