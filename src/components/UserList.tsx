import React, { useEffect, useState } from "react"
import { Container } from 'react-bootstrap'
import useFetch from 'use-http'
import User, { IUser } from "./User"

const UserList = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const { get, post, response, loading, error } = useFetch('https://jsonplaceholder.typicode.com');

    const loadInitialUsers = async () => {
        const initialUsers = await get('/users')
        if (response.ok) {
            setUsers(initialUsers)
        }
    }

    useEffect(() => {
        loadInitialUsers()
    }, [])


    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Users</h1>

            {error && 'Error!'}
            {loading && 'Loading!'}

            <>
                {
                    users.map((user) => (
                       <User user={user}/>
                    ))
                }

            </>
        </Container>
    )
}

export default UserList