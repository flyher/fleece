import * as React from 'react';
import './repo-language-color.less';

export class RepoLanguageColorComponent extends React.Component {
  render() {
    return (
      <span className={(`${this.props.children}`).toLowerCase()}>
      </span >
    );
  }
}