import React from 'react';
import './liTeam.css';

const LiTeam = (props) => {
  const {urlLogo, name} = props.item
  return (
    <div className="logo-name">
      <figure>
        <img alt="logo" src={urlLogo}/>
      </figure>
      <p>{name}</p>
    </div>
  );
}
 
export default LiTeam;