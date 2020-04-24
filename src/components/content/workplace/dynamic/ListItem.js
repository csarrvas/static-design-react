import React from 'react';
import ListContent from './ListContent';
import { timeAgo } from '../../../../helpers/helpers';
import './listItem.css';

const ListItem = (props) => {
  const {avatar, content, date} = props.item
  //{content.map((piece, index) => parseInt(index) % 2 === 0 ? <p>{piece + ' '}</p> : <span>{piece + ' '}</span>)}
  return (
    <div className="notification">
      <figure>
        <img alt="logo" src={avatar}/>
      </figure>
      <div>
        {content.map((piece, index) => <ListContent key={index} index={index} piece={piece}/>)}
        <p>{timeAgo(date)}</p>
      </div>
    </div>
  );
}
 
export default ListItem;