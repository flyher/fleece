import * as React from 'react';
import './star.scss';

export class StarIconComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      star: this.props.children
    }
  }
  render() {
    return (
      <a className="star-icon-component mr-3" href={this.state['star']['stargazersUrl']} target="_blank">
        <svg aria-label="star" className="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" role="img">
          <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
        </svg>
        {this.state['star']['stargazersCount']}
      </a>
    );
  }
}