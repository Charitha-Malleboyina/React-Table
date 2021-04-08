import axios from 'axios';
import React, {useState}  from 'react';
import {useHistory} from 'react-router-dom';

 const AddUser = () => {
     let history =useHistory();
     const [ user,setUser ] = useState({
         userId:"",
         id:"",
         title:"",
         body:"",
     });

     const {userId, id, title, body} = user;
     const onInputChange = e => {
         setUser({...user,[e.target.name]: e.target.value});
     };

     const onSubmit = async e => {
         e.preventDefault();
         await axios.post("http://localhost:3001/users",user);
         history.push("/");
        };
    return(
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a user</h2>
                <form onSubmit={e => onSubmit(e)}>
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
                    <button className="btn btn-primary btn-block">Add User</button>
                </form>
            </div>
        </div>
    );
        
    }

export default AddUser;