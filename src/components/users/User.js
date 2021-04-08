import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser ] = useState({
        name:"",
         userid:"",
         id:"",
         title:"",
         body:"",
    });

    const {idnum} = useParams();
    useEffect(()=> {
        loadUser();
    },[]);
    const loadUser = async () => {
        const res = await axios.get(
            `http://localhost:3001/users/${idnum}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
            back to home
            </Link>
            <h1 className="display-4">User Id:{idnum}</h1>
            <hr/>
            <ul className="list=group w-50">
                <li className="list-group-item">name:{user.name}</li>
                <li className="list-group-item">userid:{user.userId}</li>
                <li className="list-group-item">id:{user.id}</li>
                <li className="list-group-item">title:{user.title}</li>
                <li className="list-group-item">:{user.body}</li>

            </ul>
        </div>
    );
};

export default User;