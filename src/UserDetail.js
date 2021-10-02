import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const UserDetail = ({ match }) => {
    const [user, setUser] = useState({
    })
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
            .then(response => setUser(response.data))
            .catch(err => console.log(err));
    }, [match.params.id])
    return (
        <div>
            <Card style={{ width: '25rem', margin: '20px' }}>
                <Card.Body>
                    <Card.Text>
                        <h6>ID:</h6>{user.id}
                        <h6>NAME:</h6>{user.name}
                        <h6>USERNAME:</h6>{user.username}
                        <h6>EMAIL:</h6>{user.email}
                        <h6>PHONE:</h6>{user.phone}
                    </Card.Text>
                    <Link to="/users"><Button variant="primary">Back</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserDetail
