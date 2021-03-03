import * as React from 'react';
// import './circle.less';

export default class CircleComponent extends React.Component {
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
      <div className="circle-component">

      </div>
    )
  }
}