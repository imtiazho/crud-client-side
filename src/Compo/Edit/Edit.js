import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then( data => setUser(data))
    }, [id])

    const handleEdit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const updateUser = { name, email }

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                alert('User Edit successfully');
            })

    }
    return (
        <div>
            <h1>Edit User of: {user.name}</h1>
            <form onSubmit={handleEdit}>
                <input type="text" name='name' />
                <br />
                <input type="email" name='email' />
                <br />
                <input type="submit" value="Edit" />
            </form>
        </div>
    );
};

export default Edit;