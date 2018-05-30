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

  render() {
    let tabs = this.state['tabs'].map((tab: any) => {
      return <TabComponent children={tab} />
    })
    return (
      <div className="tabs-component">
        {tabs}
      </div>
    );
  }
}