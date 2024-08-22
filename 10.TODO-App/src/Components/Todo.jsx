import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


function Todo({ todo, onDeleteTodo, onUpdateTodo }) {

    const { id, context } = todo;

    const [editable, setEditable] = useState(false);

    const [editTodo, setEditTodo] = useState(todo.context)

    const updateTodo = () => {
        const request = {
            id: id,
            context: editTodo
        }
        onUpdateTodo(request);
        setEditable(false)
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', border: '1px solid lightgrey', padding: '20px' }}>
            <div>
                {
                    editable ? <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} type="text" style={{ width: '100%', height: '40px' }} /> : todo.context
                }

            </div>
            <div >
                <IoIosRemoveCircle onClick={() => onDeleteTodo(todo.id)} style={{ marginRight: '10px', fontSize: '25px', cursor: 'pointer' }} />
                {
                    editable ? <FaCheckCircle onClick={updateTodo} style={{ marginRight: '10px', fontSize: '25px', cursor: 'pointer' }} /> : <FaEdit onClick={() => setEditable((true))} style={{ marginRight: '10px', fontSize: '25px', cursor: 'pointer' }} />
                }

            </div>
        </div>
    )
}

export default Todo