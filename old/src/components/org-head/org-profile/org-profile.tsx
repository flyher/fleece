import * as React from 'react';
import './org-profile.less';

export class OrgProfileComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      orgProfile: this.props.children
    }
  }

  render() {
    return (
      <div className="org-profile">
        <div className="avator">
          <img src={this.state['orgProfile']['avator']}/>
        </div>
        <div className="profile">
          <h1 className="name">{this.state['orgProfile']['orgName']}</h1>
          <p className="describe">{this.state['orgProfile']['describe']}</p>
          <div className="contantus">
            <ul>
              <li>
                <svg className="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
                </svg>
                <span className="text-gray">{this.state['orgProfile']['location']}</span>
              </li>
              <li>
                <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path>
                </svg>
                <a className="text-gray" href={this.state['orgProfile']['link']}>{this.state['orgProfile']['link']}</a>
              </li>
              <li>
                <svg className="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path>
                </svg>
                <a className="text-gray" href="mailto:{this.state['orgProfile']['mail']}">{this.state['orgProfile']['mail']}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}