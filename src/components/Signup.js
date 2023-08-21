import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = (props) => {


  const [cread, setcread] = useState({ name: "", email: "", password: "", cpassword: "" })  //cread means creadentials     just a keyword  nothing else
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = cread;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },

      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    console.log(json);

    if (cread.cpassword === password) {
      if (json.success) {
        //save the auth token and redirect
        localStorage.setItem('token', json.authtoken);
        history("/");
        props.showAlert("Account Created Successfully ", "success");
      }
      else {
        props.showAlert("Invalid Details", "danger");
      }

    }
    else {
      props.showAlert("Please Enter Same Both on Confirm Password ", "Danger")

    }



  }


  const onChange = (e) => {
    setcread({ ...cread, [e.target.name]: e.target.value })
  }

  return (
    <div className="container mt-3">

      <h1 className='text-center ' style={{ color: "#05053e", fontFamily: "Lobster, cursive", marginBottom: "-5px" }}>Create a new account</h1>
      <h4 style={{ color: "#05053e", fontFamily: "'Edu SA Beginner', cursive" }} className='text-center mb-4'> use your email to create a new account </h4>

      <form onSubmit={handleSubmit}>
        <div className="container" style={{ fontFamily: "'Edu SA Beginner', cursive", width: "90%" }} >
         
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
            <div id="emailHelp" style={{ fontFamily: "'Edu SA Beginner', cursive" }} className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3" >
            <label htmlFor="name " className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" onChange={onChange} id="password" name='password' minLength={5} required />
          </div>

          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" onChange={onChange} id="cpassword" name='cpassword' minLength={5} required />
          </div>

          <button type="submit" className="btn btn-primary mx-5" style={{ marginLeft: "40%", color: "white", fontFamily: "'Edu SA Beginner', cursive" }} >Submit</button>

          Have an account <Link className={`nav-link-active fs-5 `} to="/login">Login</Link>

        </div>
      </form>
    </div>
  )
}

export default Signup