import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const deleteUser = (id) => {
        const confrimToDelete = window.confirm('Are you confirm to delete?');
        if(confrimToDelete){
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remaining = users.filter(user => user._id !== id);
                    setUser(remaining)
                }
            })
        }
    }

    return (
        <div>
            <h1>Total: {users?.length}</h1>

            {
                users?.map(u => (
                    <div key={u._id}>
                        <p>{u.name}</p>
                        <button onClick={() => deleteUser(u._id)}>X</button>
                        <Link to={`/update/${u._id}`}><button>Edit</button></Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;