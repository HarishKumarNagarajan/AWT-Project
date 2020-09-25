import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import navbar from '../../styles/Navbar.module.css';
function Navbar() {
  const [Searchbox, setSearchbox] = useState("")
  const [Button, setButton] = useState("btn btn-danger disabled")
  const handleSearchChange=(e)=>{
    console.log(e.target.value)
    e.target.value?setButton("btn btn-danger"):setButton("btn btn-danger disabled")
  }
    return (
        <div style={{position:"sticky",top:"0",zIndex:"1000"}}>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
  <NavLink className="navbar-brand " to="/Home">
<img src={require('../../assets/logo.png')} width="30" height="30" alt=""/>
 &nbsp; U'r Choice Blog
</NavLink>
<div style={{display:"flex"}}>
<input type="search" onChange={handleSearchChange} placeholder="Search..."  style={{borderTopRightRadius:"0px",borderBottomRightRadius:"0px"}}className="form-control"></input>
<button className={Button} style={{borderTopLeftRadius:"0px",borderBottomLeftRadius:"0px"}}><i className="fa fa-search"></i></button>
</div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav navbar-center " style={{position:"absolute",left:"50%",transform:"translatex(-50%)"}}>
      <li className="nav-item" style={{padding:"0px 20px"}}>
        <NavLink activeclassName={navbar.active} style={{fontSize:"18px"}} className="nav-link" to="/Home"><i class="fa fa-home" aria-hidden="true"></i> <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item" style={{padding:"0px 20px"}}>
        <NavLink activeclassName={navbar.active} className="nav-link" style={{fontSize:"18px"}} to="/Createpost"><i class="fa fa-pencil" aria-hidden="true"></i></NavLink>
      </li>
      <li className="nav-item" style={{padding:"0px 20px"}}>
        <NavLink activeclassName={navbar.active} style={{fontSize:"18px"}} className="nav-link"to="/Blog"><i class="fa fa-th-large" aria-hidden="true"></i></NavLink>
      </li>
      <li className="nav-item" style={{padding:"0px 20px"}}>
        <NavLink activeclassName={navbar.active} style={{fontSize:"18px"}} className="nav-link"to="/Login"><i class="fa fa-sign-in" aria-hidden="true"></i></NavLink>
      </li>
      <li className="nav-item" style={{padding:"0px 20px"}}>
        <NavLink activeclassName={navbar.active} className="nav-link"style={{fontSize:"18px"}} to="/Signup"><i class="fa fa-user-plus" aria-hidden="true"></i></NavLink>
      </li>
    </ul>
   
  </div>

  <div style={{display:"flex"}}>
  <NavLink className="navbar-brand " style={{display:"flex"}} to="/Home">
<img src={require('../../assets/John-Wick-carousel.jpg')} width="30" height="30" style={{borderRadius:"50%"}}alt=""/>
 &nbsp; <h6 style={{margin:"3px 0px"}}>hari21032001@gmail.com</h6>
</NavLink>
<button className="btn btn-danger"><i class="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
  </div>
</nav>
        </div>
    )
}

export default Navbar
