import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }
    const createTodo = () => {

        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            context: newTodo
        }

        onCreateTodo(request)

        clearInput();
    }

    return (
        <div>
            <div className='todo-create' style={{ width: '100%' }} >
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" placeholder='Todo Giriniz' style={{ marginBottom: '30px', width: '100%', height: '40px' }} /><br />
                <button onClick={createTodo} className='TodoBtn'> Todo Oluştur</button>
            </div>
        </div >
    )
}

export default TodoCreate