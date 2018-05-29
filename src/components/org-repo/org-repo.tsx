import * as React from 'react';
import { StarIconComponent } from '../shared/star/star';
import { ForkedIconComponent } from '../shared/forked/forked';
import { Config } from '../../util/config';
import './org-repo.less';
import { RepoLanguageColorComponent } from '../shared/repo-language-color/repo-language-color';
import { TopicsComponent } from '../shared/topics/topics';

export class OrgRepoComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      orgRepo: this.props.children
    }
  }

  render() {
    let stargazers_url = Config.URL_GITHUB_HOST + '/' + this.state['orgRepo']['full_name'] + '/stargazers';
    let network_url = Config.URL_GITHUB_HOST + '/' + this.state['orgRepo']['full_name'] + '/network';
    return (
      <div className="org-repo-component py-4 border-bottom">
        <div className="title mb-1">
          <h3 className="name">
            <a href={this.state['orgRepo']['html_url']}>
              {this.state['orgRepo']['name']}
            </a>
          </h3>
          <span className="fork-from f6 text-gray">{this.state['orgRepo']['fork'] ? 'Forked from ' : ''}</span>
        </div>
        <div className="describe">
          <p className="f6">{this.state['orgRepo']['description']}</p>
          <div>

          </div>
        </div>
        <TopicsComponent/>
        {/* <div className="topics">
          <a className="topic-tag" href="">nodejs</a>
          <a href="">react-native</a>
        </div> */}
        <div className="focus f6 text-gray mt-2">
          <RepoLanguageColorComponent children={this.state['orgRepo']['language']} />
          <StarIconComponent children={{
            stargazersUrl: stargazers_url,
            stargazersCount: this.state['orgRepo']['stargazers_count']
          }} />
          <ForkedIconComponent children={{
            networkUrl: network_url,
            forksCount: this.state['orgRepo']['forks_count']
          }} />
        </div>
      </div>
    )
  }
}