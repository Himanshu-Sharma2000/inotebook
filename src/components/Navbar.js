import React  from 'react'
import{Link ,  useLocation ,useNavigate } from 'react-router-dom'


const Navbar = () => {

    let navigate = useNavigate();

   const handleLogout=()=>{
  localStorage.removeItem('token');
 navigate('/login');

}

let location =useLocation();
    return (
        <>
          
            <nav className="navbar navbar-expand-lg navbar-light  " style={{background:"#cbe7cb",opacity:"0.7"}}>
                <div className="container-fluid " style={{fontFamily:"'Edu SA Beginner', cursive"}}>
                    <Link className="navbar-brand fs-4" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname ==='/'? "active" :" "} fs-5`}aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname ==='/about'? "active" :" "} fs-5`} to="/about">About</Link>
                            </li>


                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex" role="search">
                        <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-2" to="signup" role="button">Sign Up</Link>
                        </form>:<button className="btn btn-primary mx-2" onClick={handleLogout}>Logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar



