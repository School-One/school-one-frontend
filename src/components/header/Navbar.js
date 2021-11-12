import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

import './navbar.css';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
  }

  useEffect(() => {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    });
  }, []);

  const signoutHandler = () => {
    logout();
    window.location.reload();
  };

  return (
    <>
      <Link to="/" className="logo">
        School One
      </Link>
      <div
        className="toggle"
        style={{
          backgroundImage: `url(${`${process.env.PUBLIC_URL}/img/menu.png`})`,
        }}
        onClick={toggleMenu}
      />
      <ul className="menu">
        {user ? (
          <>
            <li>
              <Link to="#signout" className="a" onClick={signoutHandler}>
                Sign Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="a">
                Login
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
}
