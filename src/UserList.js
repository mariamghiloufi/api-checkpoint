import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json) => {
                setUsers(json);
                setLoading(false);
            })
            .catch((err) => console.log(err))
    }, []);
    if (loading) {
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                users.map((user, index) => <UserCard user={user} key={index} />)
            }
        </div>
    )
}

export default UserList
