import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from "react-router-dom"


const UserCard = ({ user }) => {
    return (
        <div>
            <Card style={{ width: '20rem', margin: '20px' }}>
                <span className="name">{user.username[0]}</span>
                <Card.Body>
                    <Card.Title>Name:{user.name}</Card.Title>
                    <Card.Text>
                        username: {user.username}
                        email: {user.email}
                        phone: {user.phone}
                        adress: {user.adress}
                    </Card.Text>
                    <Link to={`/${user.id}`}><Button variant="primary">Go</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard
