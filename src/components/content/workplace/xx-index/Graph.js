import React, { Fragment } from 'react';
import './graph.css';

const Graph = (props) => {
  const {personal, team, department} = props.info;
  return (
    <Fragment>
      <figure id="graph">
        <img alt="graph" src="images/graph.jpg"/>
      </figure>
      <div id="graph-statistics">
        <div>
          <p>personal</p>
          <p>{personal}</p>
        </div>
        <div>
          <p>team</p>
          <p>{team}</p>
        </div>
        <div>
          <p>department</p>
          <p>{department}</p>
        </div>
      </div>
    </Fragment>
  );
}
 
export default Graph;