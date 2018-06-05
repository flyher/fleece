import * as React from 'react';
import './tabs.less';
import { TabComponent } from './tab/tab';

interface Props {
  _onParentReLoad: (tab: any) => void
}

export class TabsComponent extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      tabs: this.props.children
    }
  }

  _onTabSwitch: any = (tab: any) => {
    // change tab selected status
    let tabs = this.state['tabs'];
    tabs.forEach((item: any) => {
      item['selected'] = false;
      if (item.id === tab.id) {
        item['selected'] = true;
      }
    });
    this.setState({
      tabs: tabs
    });
    // reload profile and update list
    this.props._onParentReLoad(tab);
  }

  render() {
    let tabs = this.state['tabs'].map((tab: any) => {
      return <TabComponent
        children={tab}
        onTabSwitch={this._onTabSwitch.bind(this, tab)
        }
      />
    })

    return (
      <div className="tabs-component">
        {tabs}
      </div>
    );
  }
}