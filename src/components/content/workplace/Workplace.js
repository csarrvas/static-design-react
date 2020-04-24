import React from 'react';
import Card from '../Card';
import '../content.css';

const Workplace = ({ongoingProject, dynamic, xxIndex, team}) => {
  return (
    <div id="workplace">
      <main>
        <Card
          title = 'Ongoing project'
          items = {ongoingProject}
        />
        <Card
          title = 'dynamic'
          items = {dynamic}
        />
      </main>
      <aside>
        <Card
          title = 'XX index'
          items = {xxIndex}
        />
        <Card
          title = 'team'
          items = {team}
        />
      </aside>
    </div>
  );
}
 
export default Workplace;