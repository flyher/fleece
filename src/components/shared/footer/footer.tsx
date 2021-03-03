import * as React from 'react';
import './footer.scss';
import moment from "moment"
import { Config } from '../../../resource/config';

export class FooterComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      start: '2017',
      end: '2018',
      support: Config.orgInfo['profile']['link']
    }
  }

  componentDidMount() {
    this.setState({
      end: moment().format('YYYY')
    })
  }

  render() {
    return (
      <div className="footer-component">
        <div className="content-container">
          <span className="copyright">
            &copy; {this.state['start']}-{this.state['end']} By &nbsp;
            <a href="https://www.github.com/flyher/fleece">fleece</a>. All rights reserved.
          </span>
          <span className="logo"></span>
          <span className="links">
            <a href={this.state['support']}>Support</a>
          </span>
        </div>
      </div>
    );
  }
}