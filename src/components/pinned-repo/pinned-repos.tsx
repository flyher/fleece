import * as React from 'react';
import './pinned-repos.less';
import { RepoLanguageColorComponent } from '../shared/repo-language-color/repo-language-color';
import { StarIconComponent } from '../shared/star/star';
import { ForkedIconComponent } from '../shared/forked/forked';
import { Config } from '../../util/config';

export class PinnedRepoComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      pinnedRepo: this.props.children
    }
  }

  render() {
    let stargazers_url = Config.URL_GITHUB_HOST + this.state['pinnedRepo']['full_name'] + '/stargazers';
    let network_url = Config.URL_GITHUB_HOST + this.state['pinnedRepo']['full_name'] + '/network';
    return (
      <div className="pinned-repo-component rounded-1 mb-3 border-gray-dark border">
        <span className="name">{this.state['pinnedRepo']['name']}</span>
        <p className="describe">{this.state['pinnedRepo']['description']}</p>
        <div className="focus f6 text-gray mt-2">
          <RepoLanguageColorComponent children={this.state['pinnedRepo']['language']} />
          <StarIconComponent children={{
            stargazersUrl: stargazers_url,
            stargazersCount: this.state['pinnedRepo']['stargazers_count']
          }} />
          <ForkedIconComponent children={{
            networkUrl: network_url,
            forksCount: this.state['pinnedRepo']['forks_count']
          }} />
        </div>
      </div>
    );
  }
}