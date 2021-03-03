import * as React from 'react';
import './pinned-repo.scss';
import { RepoLanguageColorComponent } from '../shared/repo-language-color/repo-language-color';
import { StarIconComponent } from '../shared/star/star';
import { ForkedIconComponent } from '../shared/forked/forked';
import { Config } from '../../resource/config';

export class PinnedRepoComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      pinnedRepo: this.props.children
    }
  }

  render() {
    let stargazers_url = Config.URL_GITHUB_HOST + '/' + this.state['pinnedRepo']['full_name'] + '/stargazers';
    let network_url = Config.URL_GITHUB_HOST + '/' + this.state['pinnedRepo']['full_name'] + '/network';
    return (
      <div className="pinned-repo-component p-3 ">
        <span className="name">
          <a href={this.state['pinnedRepo']['html_url']} className="text-bold">
            {this.state['pinnedRepo']['name']}
          </a>
        </span>
        <p className="describe pinned-repo-desc">{this.state['pinnedRepo']['description']}</p>
        <p className="focus f6 text-gray">
          <RepoLanguageColorComponent children={this.state['pinnedRepo']['language']} />
          <StarIconComponent children={{
            stargazersUrl: stargazers_url,
            stargazersCount: this.state['pinnedRepo']['stargazers_count']
          }} />
          <ForkedIconComponent children={{
            networkUrl: network_url,
            forksCount: this.state['pinnedRepo']['forks_count']
          }} />
        </p>
      </div>
    );
  }
}