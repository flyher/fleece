import * as React from 'react';
import { CardComponent } from '../card/card';
import './fleece.less';

export default class FleeceComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '项目名称',

    }
  }

  componentWillMount() {
    fetch('../../model/repos.json').then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="fleece-component">
        <CardComponent />
      </div>
    )
  }
}