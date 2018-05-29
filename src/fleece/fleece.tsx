import * as React from 'react';
import axios from 'axios';
// import { CardComponent } from '../components/card/card';
import './fleece.less';
import * as moment from 'moment';
import { OrgRepoComponent } from '../components/org-repo/org-repo';

export class FleeceComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      entry: {
        projects: [],
        profile: {},
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        pageCount: 0,
        repos: []
      },
      status: {
        needUpdate: true,
        isLoading: false
      }
    }
    this._readStorage();
  }

  componentWillMount(): void {
    if (this.state['status']['needUpdate']) {
      this._beginLoading();
      axios({
        method: 'get',
        url: 'https://api.github.com/users/flyher'
      }).then((res: any) => {
        if (res.status === 200 && res.statusText === 'OK') {
          this.setState({
            entry: {
              profile: res.data,
              public_repos: res.data.public_repos,
              public_gists: res.data.public_gists,
              followers: res.data.followers,
              following: res.data.following,
              pageCount: parseInt((res.data.public_repos / 30).toString()) + (res.data.public_repos % 30 > 0 ? 1 : 0),
              repos: []
            }
          })
          this._loadRepos();
        }
      })
    }
  }

  componentDidMount(): void {
  }

  _loadRepos(): void {
    let pageCount = this.state['entry']['pageCount'];
    let pages = [];
    for (let pageNo = 1; pageNo <= pageCount; pageNo++) {
      pages.push({
        id: pageNo,
        pageNo: pageNo,
        url: 'https://api.github.com/users/flyher/repos?' + 'page=' + pageNo
      })
    }
    let count = 0;
    pages.forEach((page) => {
      // axios.get(page.url)
      axios({
        method: 'get',
        url: page.url,
        // headers: {
        //   Accept: "application/vnd.github.mercy-preview+json"
        // }
      })
        .then((res) => {
          this.setState((oldState) => {
            let temp_repos = oldState['entry']['repos'];
            res.data.map((repo: any) => {
              temp_repos.push(repo);
            })
            oldState['entry']['repos'] = temp_repos;
            return oldState['entry']['repos'];
          })
        }).then(() => {
          count++;
          if (count === pageCount) {
            this._saveStorage();
          }
        });
    })
  }

  _readStorage(): void {
    this._beginLoading();
    let fleeceStorage = localStorage['fleece'];
    if (fleeceStorage === null || fleeceStorage === undefined) {
      this.setState({
        status: {
          needUpdate: true
        }
      })
      return;
    }
    let fleece: any = JSON.parse(fleeceStorage);
    if (moment.utc().valueOf() / 1000 - fleece.updateDate > 60 * 60 * 24) {
      // need update
      this.setState({
        status: {
          needUpdate: true
        }
      })
    } else {
      this.state['entry'] = fleece.entry;
      this.state['status']['needUpdate'] = false;
    }
    this._finishLoading();
  }

  _saveStorage(): void {
    localStorage['fleece'] = JSON.stringify({
      entry: this.state['entry'],
      status: {
        updateDate: moment.utc().valueOf() / 1000
      }
    });
    this._finishLoading();
  }

  _beginLoading(): void {
    this.setState({
      status: {
        isLoading: true
      }
    })
  }

  _finishLoading(): void {
    this.setState({
      status: {
        isLoading: false
      }
    })
  }

  render(): any {
    // let cards = this.state['entry']['repos'].map((repo: any) => {
    //   return <CardComponent children={repo} />
    // });
    let isLoading = this.state['status']['isLoading'];
    let org_repos = this.state['entry']['repos'].map((repo: any) => {
      return <OrgRepoComponent children={repo} />
    });
    console.log(isLoading);
    if (isLoading) {
      return <div className="fleece-component">
        <div className="loading"></div>
      </div>
    }

    return (
      <div className="fleece-component">
        {org_repos}
      </div>
    )
  }
}