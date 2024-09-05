import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './Redux/userSlice';
import User from './Redux/User'

function UserList() {

    const dispatch = useDispatch();
    const { users } = useSelector(store => store.users);

    useEffect(() => {
        dispatch(getAllUsers())

    }, [])

    return (
        <div>
            {
                users && users.map((user) => {
                    return <User key={user.id} user={user} />
                })
            }
        </div>
    )
}

export default UserList