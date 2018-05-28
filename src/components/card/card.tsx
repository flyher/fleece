import * as React from 'react';
import { StarIconComponent } from '../shared/star/star';
import { ForkedIconComponent } from '../shared/forked/forked';
// import './card.less';

export class CardComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      card: this.props.children
    }
  }

  render() {
    let stargazers_url = 'https://www.github.com/' + this.state['card']['full_name'] + '/stargazers';
    let network_url = 'https://www.github.com/' + this.state['card']['full_name'] + '/network';
    return (
      <div className="card-component">
        <span className="name">{this.state['card']['name']}</span>
        <p className="describe">{this.state['card']['description']}</p>
        <p>
          <span>{this.state['card']['language']}</span>
          <a href={stargazers_url}>
            <StarIconComponent />{this.state['card']['stargazers_count']}
          </a>
          <a href={network_url}>
            <ForkedIconComponent />
            {this.state['card']['forks_count']}
          </a>
        </p>
      </div>
    )
  }
}