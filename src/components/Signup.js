import React ,{useState}from 'react'
import {  useNavigate } from 'react-router-dom'

const Signup = () => {

  
    const [cread, setcread] = useState({name: "",email: "", password: "", cpassword:""})  //cread means creadentials     just a keyword  nothing else
  let  history =useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

     const {name ,email ,password } = cread;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
      
        method: "POST",
          headers: {
            "Content-Type": "application/json",
        
          },
          
          body: JSON.stringify({name ,email, password}),
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
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name " className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name='name' onChange={onChange}  aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control"  onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control"  onChange={onChange} id="password" name='password' minLength={5} required/>
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange}  id="cpassword" name='cpassword' minLength={5} required />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup