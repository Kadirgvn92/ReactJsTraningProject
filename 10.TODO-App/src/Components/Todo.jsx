import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";



function Todo({ todo, onDeleteTodo }) {


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', border: '1px solid lightgrey', padding: '20px' }}>
            <div>
                {todo.context}
            </div>
            <div >
                <IoIosRemoveCircle onClick={() => onDeleteTodo(todo.id)} style={{ marginRight: '10px', fontSize: '25px', cursor: 'pointer' }} />
                <FaEdit style={{ marginRight: '10px', fontSize: '25px', cursor: 'pointer' }} />
            </div>
        </div>
    )
}

export default Todo