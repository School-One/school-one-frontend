import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//CSS
import './navbar.css';


//REDUX
import { signout } from '../../redux/actions/userActions';

export default function Navbar() {

  const dispatch = useDispatch();

  const user = useSelector(state => state.userSignin);

  const { userInfo } = user;

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

    dispatch(signout());
    window.location.reload();

  }

    return (
        <>
          <Link to="/" className="logo">Academy</Link>
          <div className="toggle" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/img/menu.png'})` }} onClick={toggleMenu}></div>
          <ul className="menu">
            {
              userInfo ? 
              (
                <>
                  <li><Link to="/profile" className="a">{userInfo.username}</Link></li>
                  <li>
                    <Link to="#signout" className="a" onClick={signoutHandler} >Sign Out</Link>
                  </li>
                </>
              )
               : (
                <>
                  <li><Link to="/login" className="a">Login</Link></li>
                  <li><Link to="/register" className="a">Register</Link></li>
                </>
              )
            }
            
          </ul>
        </>
    )
}
