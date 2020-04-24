import React from 'react';
import { timeAgo } from '../../../../helpers/helpers';
import './item.css';

const Item = (props) => {
  const {urlLogo, name, description, team, date} = props.item
  return (
    <div className="project">
      <figure>
        <img alt="logo" src={urlLogo}/>
      </figure>
      <p>{name}</p>
      <p>{description}</p>
      <p>{team}</p>
      <p>{timeAgo(date)}</p>
    </div>
  );
}
 
export default Item;