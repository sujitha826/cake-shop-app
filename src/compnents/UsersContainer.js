import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux';


export default function UsersContainer() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers())
    }, []);

    const userData = useSelector(state => state.user);

    return (userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h2>Users List</h2>
            <div>
                {userData &&
                    userData.users &&
                    userData.users.map(user => <p>{user.name}</p>)}
            </div>
        </div>
    )
    );
}