import React ,{useState}from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {

  let  history =useNavigate();

  const [cread, setcread] = useState({email: "", password: ""})  //cread means creadentials     just a keyword  nothing else
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
    
      },
      
      body: JSON.stringify({email :cread.email, password: cread.password}),
    });

    const json = await response.json();
    console.log(json);

    if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken);
      history("/");

    }
    else{
      alert("Invalid Creadentials");
    }
  }
  

  const onChange =(e)=>{
    setcread({...cread, [e.target.name]:e.target.value})
  }
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={cread.title} onChange={onChange} name="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={cread.password} onChange={onChange}name="password" />
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Login