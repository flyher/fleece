import * as React from 'react';
import './card.less';

export default class CardComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 20180528,
      name: 'project name',
      from: 'github'
    }
  }

  render() {
    return (
      <div className="card-component">
        
      </div>
    )
  }
}