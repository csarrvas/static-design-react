import React from 'react';
import UserCard from './user-card/UserCard';
import './header.css';

const Header = ({ userInformation, callback }) => {
  return (
    <header>
      <div>
        <p>Dashboard</p>
      </div>
      <nav>
        <ul>
          <li onClick={() => callback('home')}>Home</li>
          <li onClick={() => callback('dashbord')}>Dashboard</li>
          <li className="selected" onClick={() => callback('workplace')}>Workplace</li>
        </ul>
      </nav>
      <UserCard
        userInfo = {userInformation}
      />
    </header>
  );
}
 
export default Header;