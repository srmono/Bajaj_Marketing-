import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

function EditUser() {
 
  let history = useHistory();
  const { id }  = useParams();
  
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: ""
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user)
    history.push("/");
  }

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(result.data)
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-1"> Edit User</h2>
        <form onSubmit={ e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="form-control form-control-lg"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="form-control form-control-lg"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="form-control form-control-lg"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="form-control form-control-lg"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Your Website"
              className="form-control form-control-lg"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className=" w-100 btn btn-warning bnt-block">
             Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
