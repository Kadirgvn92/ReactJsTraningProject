import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onDeleteTodo }) {
    return (
        <div>
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
                ))
            }

        </div>
    )
}

export default TodoList