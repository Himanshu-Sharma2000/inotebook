import React ,{useState}from 'react'
import {  useNavigate ,Link} from 'react-router-dom'

const Login = (props) => {

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
      props.showAlert("Logged in Successfully", "success");
      history("/");
    }
    else{
      props.showAlert("Invalid Creadentials", "danger");
    }
  }
  

  const onChange =(e)=>{
    setcread({...cread, [e.target.name]:e.target.value})
  }
  


  return (
    <div className='mt-3' style={{fontFamily:"'Edu SA Beginner', cursive"}}>
      <h1 className='text-center  'style={{color:"#05053e", fontFamily:"Lobster, cursive", fontSize:"103px",marginBottom:"-5px"}}>iNotebook</h1>
      <h4 style={{fontFamily:"'Edu SA Beginner', cursive"}} className='text-center mb-4'> Your Notes on Cloud 	&#128519;</h4>
      <h6 style={{fontFamily:"'Edu SA Beginner', cursive"}} className='text-center mb-4'>Login to continue with iNotebook</h6>
      <form onSubmit={handleSubmit}>
        <div className="container fs-5" style={{width:"90%"}}>
        <div className="mb-3 mx-5 mt-3">
          <label htmlFor="email" style={{fontFamily:"'Edu SA Beginner', cursive"}} className="form-label">Email address</label>
          <input  placeholder='name@example.com' type="email" className="form-control" id="email" value={cread.title} onChange={onChange} name="email" aria-describedby="emailHelp" />

        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="password" style={{fontFamily:"'Edu SA Beginner', cursive"}} className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={cread.password} onChange={onChange}name="password" />
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginLeft: "40%", color: "white", fontFamily: "'Edu SA Beginner', cursive" }} >Login</button><br/>

         <div className='fs-6 mt-3' style={{marginLeft: "34%"}}>
          Don't have an Account ?<Link className={`nav-link-active  `} to="/signup">Signup</Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login