import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { adddata } from '../../services/action/student.action';


function Header({data}) {
    const dispatch = useDispatch();

    const {loading,error,reduxData} = useSelector((state)=>state);

  const handleadd = () =>{
     dispatch(adddata(data))
     console.log("dataa",data);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
      <NavLink to="/" className="nav-link custom-link">
            Home
        </NavLink>
        <button className="navbar-toggler"  type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarNav"  aria-controls="navbarNav"  aria-expanded="false"  aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Pages
              </a>
            </li> 
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Servicies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link custom-link" href="#">
                Blog
              </a>
            </li>
          </ul>
         {/* <NavLink to={"/StudentView"}> <button className="btn btn-primary">view</button></NavLink> */}
         <button  className="btn btn-primary" onClick={handleadd}>ADD</button>
         {loading && <p>Loading...</p>}
         {error && <p>Error: {error}</p>}
         {reduxData && (
                        <div>
                            <p>Data:</p>
                            <ul>
                                <li>Name: {reduxData.name}</li>
                                <li>Roll No: {reduxData.rollno}</li>
                                <li>Grid: {reduxData.grid}</li>
                                <li>Email: {reduxData.mail}</li>
                            </ul>
                        </div>
                    )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
