import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

//CSS
import './navbar.css';

export default function Navbar() {

  const { user, logout } = useContext(AuthContext);

  function toggleMenu()
	{
		var menuToggle = document.querySelector('.toggle');
		var menu = document.querySelector('.menu');
		menuToggle.classList.toggle('active');
		menu.classList.toggle('active');
	}

  useEffect(() => {
    
    window.addEventListener('scroll', function(){
			var header = document.querySelector('header');
			if(header){
        header.classList.toggle('sticky', window.scrollY > 0);
      }
		});

  }, []);

  const signoutHandler = () =>{

    logout();
    window.location.reload();

  }

    return (
        <>
          <Link to="/" className="logo">School One</Link>
          <div className="toggle" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/menu.png'})` }} onClick={toggleMenu}></div>
          <ul className="menu">
            {
              user ? 
              (
                <>
                  <li><Link to="/profile" className="a">a</Link></li>
                  <li>
                    <Link to="#signout" className="a" onClick={signoutHandler} >Sign Out</Link>
                  </li>
                </>
              )
               : (
                <>
                  <li><Link to="/login" className="a">Login</Link></li>
                </>
              )
            }
            
          </ul>
        </>
    )
}
