import * as React from 'react';
import './org-head.less';
import { OrgProfileComponent } from './org-profile/org-profile';

export class OrgHeadComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      orgInfo: this.props.children
    }
  }

  render() {
    return (
      <div className="org-head content-container">
        <div className="container">
          <OrgProfileComponent children={this.state['orgInfo']['profile']} />
        </div>
      </div>
    );
  }
}