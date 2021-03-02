import * as React from 'react';
import './topics.less';

export class TopicsComponent extends React.Component {
  render() {
    return (
      <div className="topics-component">
        <a className="topic-tag f6" href="">nodejs</a>
        <a className="topic-tag f6" href="">react-native</a>
      </div>
    );
  }
}