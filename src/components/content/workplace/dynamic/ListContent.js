import React from 'react';

const ListContent = ({index, piece}) => {
  if (index % 2 === 0) {
    return (<p>{piece + ' '}</p>);
  } else {
    return (<span>{piece + ' '}</span>);
  }
}
 
export default ListContent;