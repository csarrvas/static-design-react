import React from 'react';
import './userCard.css';

const UserCard = (props) => {
  const {avatar, name, description, itemsCount, ranking, teamsCount, visitsCount} = props.userInfo;
  
  let numberOfVisits;
  if (visitsCount >= 1000) {
    const visits = visitsCount.toString();
    const numberArray = visits.split('');
    numberArray.splice(-3,0,',');
    numberOfVisits = numberArray;
  } else {
    numberOfVisits = visitsCount;
  }

  return (
    <div id="user-card">
      <div id="welcome">
        <figure>
          <img alt="user-logo" src={avatar}/>
        </figure>
        <p>Good morning, {name}, I wish you happiness every day!</p>
        <p>{description}</p>
      </div>
      <div id="statistics">
        <div>
          <p>Number of items</p>
          <p>{itemsCount}</p>
        </div>
        <div>
          <p>Team ranking</p>
          <p>{ranking}<span>{teamsCount}</span></p>
        </div>
        <div>
          <p>Project visit</p>
          <p>{numberOfVisits}</p>
        </div>
      </div>
    </div>
  );
}
 
export default UserCard;