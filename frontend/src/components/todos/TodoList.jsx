import Todo from './Todo';

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  return(
    <>
      <h1>All My Todos</h1>
      { todos.map( t => 
        <Todo
        key={t.id}
        {...t}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        />
      )}
    </>
  )
}