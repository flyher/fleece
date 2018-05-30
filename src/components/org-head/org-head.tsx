import * as React from 'react';
import './org-head.less';
import { OrgProfileComponent } from './org-profile/org-profile';

export class OrgHeadComponent extends React.Component {
  constructor(props: any) {
    super(props);
    let children = this.props.children;
    this.state = {
      orgInfo: children!['orgInfo']
    }
  }

  render() {
    return (
      <div className="org-head">
        <div className="container">
          <OrgProfileComponent children={this.state['orgInfo']['profile']} />
        </div>
      </div>
    );
  }
}