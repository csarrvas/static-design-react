import React from 'react';
import Item from './workplace/ongoing-project/Item';
import ListItem from './workplace/dynamic/ListItem';
import Graph from './workplace/xx-index/Graph';
import LiTeam from './workplace/team/LiTeam';
import './cards.css';

const Card = ({title, items}) => {
  if (title === 'Ongoing project') {
    return (
      <div className="card">
        <p>{title}<span>All items</span></p>
        {items.map((item, index) => <Item
        key = {index}
        item = {item}/>)}
      </div>
    );

  } else if (title === 'dynamic') {
    return (
      <div className="card">
        <p>{title}</p>
        <div id="notifications">
          {items.map((item, index) => <ListItem
          key = {index}
          item = {item}/>)}
        </div>
      </div>
    );

  } else if (title === 'XX index') {
    return (
      <div className="card">
        <p>{title}</p>
        <Graph
          info={items[0]}
        />
      </div>
    );

  } else if (title === 'team') {
    return (
      <div className="card">
        <p>{title}</p>
        {items.map((item, index) => <LiTeam
        key = {index}
        item = {item}/>)}
      </div>
    );

  }
  return (
    <div className="card">
      <p>{title}</p>
    </div>
  );
}
 
export default Card;
