import axios from 'axios';
import React, {useState,useEffect}  from 'react';
import {useHistory,useParams} from 'react-router-dom';

 const EditUser = () => {
     let history =useHistory();
     const {idnum} = useParams();
     const [ user,setUser ] = useState({
         name:"",
         userId:"",
         id:"",
         title:"",
         body:"",
     });

     const {name, userId, id, title, body} = user;
     const onInputChange = e => {
         setUser({...user,[e.target.name]: e.target.value});
     };

     useEffect(()=> {
         loadUser();

     } ,[]);
     const onSubmit = async e => {
         e.preventDefault();
         await axios.put(`http://localhost:3001/users/${idnum}`,user);
         history.push("/");
         };
const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/users/${idnum}`);
    setUser(result.data)
};

    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a user</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Name"
                            name="name"
                            value={name}
                            onChange={e=> onInputChange(e)}
                        />    
                    </div>
                    <div className="form-group">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your UserId"
                            name="userId"
                            value={userId}
                            onChange={e=> onInputChange(e)}
                        />    
                    </div>
                    <div className="form-group">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your Id"
                            name="id"
                            value={id}
                            onChange={e=> onInputChange(e)}
                        />    
                    </div>
                    <div className="form-group">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your title"
                            name="title"
                            value={title}
                            onChange={e=> onInputChange(e)}
                        />    
                    </div>
                    <div className="form-group">
                        <input  
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter text in body"
                            name="body"
                            value={body}
                            onChange={e=> onInputChange(e)}
                        />    
                    </div>
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            </div>
    );
        
    };

export default EditUser;