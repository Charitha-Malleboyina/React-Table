import React, { useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () =>{
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/users");
       setUser(result.data);
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUsers();
    };
    return(
        <div className="container">
            <div className="py-4">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>title</th>
                            <th>body</th>
                            <th >Action</th>
                            
                        </tr>
                    </thead>          
                    <tbody>
                        {users.map((user,index) => (
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.userId}</td>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                                <td>
                                    <Link class="btn btn-primary my-lg-0"  to={`/users/${user.id}`}>View</Link>
                                    <Link class="btn btn-outline-primary my-lg-0" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link class="btn btn-danger" my-lg-0 onClick={()=> deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>      
                </table>
            </div>
        </div>
    );
};

export default Home;