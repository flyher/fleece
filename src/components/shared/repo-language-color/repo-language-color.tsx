import * as React from 'react';
import './repo-language-color.scss';

export class RepoLanguageColorComponent extends React.Component {
  render() {
    return (
      <span className="repo-language-color mr-3">
        <span className={'language-color ' + (`${this.props.children}`).toLowerCase().replace('++', '__').replace('#', '_')}>
        </span >
        <span className="programming-language">{this.props.children}</span>
      </span>
    );
  }
}