import React from 'react'
import '../App.css';

function TodoCreate() {
    return (
        <div>
            <div className='todo-create' style={{ width: '100%' }} >
                <input type="text" placeholder='Todo Giriniz' style={{ marginBottom: '30px', width: '100%', height: '40px' }} /><br />
                <button className='TodoBtn'> Todo Oluştur</button>
            </div>
        </div >
    )
}

export default TodoCreate