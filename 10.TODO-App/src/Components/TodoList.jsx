import React from 'react'
import Todo from './Todo'

<<<<<<< HEAD
function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {
=======
function TodoList({ todos, onDeleteTodo }) {
>>>>>>> a9d1a80525096e87a0077781eb83b0d6ef7182c9
    return (
        <div>
            {
                todos.map(todo => (
<<<<<<< HEAD
                    <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo} />
=======
                    <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
>>>>>>> a9d1a80525096e87a0077781eb83b0d6ef7182c9
                ))
            }

        </div>
    )
}

export default TodoList