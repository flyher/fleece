import * as React from 'react';
import './tab.less';

export class TabComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      tab: this.props.children
    }
  }
  // onTabSwitch: any = () => {
  //   console.log(this);
  //   this.props.();
  // }

  render() {
    return (
      <a className={'tab-component' + ((`${this.state['tab']['selected']}`) == 'true' ? ' selected' : '')}
        title={this.state['tab']['link']}
        href="javascript:void(0);"
        onClick={()=>this.props.onParentTabSwitch()}>
        <svg className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
          <path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
        </svg>
        {this.state['tab']['text']}
        <span className="counter">{this.state['tab']['counter']}</span>
      </a>
    );
  }
}