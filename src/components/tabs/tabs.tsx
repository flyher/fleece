import * as React from 'react';
import './tabs.less';
import { TabComponent } from './tab/tab';

export class TabsComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      tabs: this.props.children
    }
  }

  _onParentTabSwitch: any = () => {
    console.log(this);
  }

  render() {
    let tabs: Array<any> = [];
    this.state['tabs'].map((tab: any) => {
      tabs.push(<TabComponent children={tab} onParentTabSwitch={this._onParentTabSwitch()} />)
    })
    return (
      <div className="tabs-component">
        {tabs}
      </div>
    );
  }
}