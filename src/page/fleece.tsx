import * as React from 'react';
import axios from 'axios';
// import { CardComponent } from '../components/card/card';
import './fleece.less';
import * as moment from 'moment';
import { OrgRepoComponent } from '../components/org-repo/org-repo';
import { OrgHeadComponent } from '../components/org-head/org-head';
import { Config } from '../util/config';
import { TabsComponent } from '../components/tabs/tabs';
import { PinnedRepoComponent } from '../components/pinned-repo/pinned-repo';

export class FleeceComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      entry: {
        profile: {},
        public_repos: 0,
        public_gists: 0,
        followers: 0,
        following: 0,
        pageCount: 0,
        repos: [],
        pinned_repos: []
      },
      status: {
        needUpdate: true,
        isLoading: true
      },
      org: {
        orgInfo: Config.orgInfo,
        tabs: Config.tabs
      },
      test: {
        p1: 1,
        p2: 2,
        p3: 3
      }
    }
    // this._beginLoading();
  }

  componentWillMount(): void {

  }

  componentDidMount(): void {
    this._readStorage();
  }

  _loadProfile(): void {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/flyher'
    }).then((res: any) => {
      if (res.status === 200 && res.statusText === 'OK') {
        this.setState({
          'entry':
            Object.assign({}, this.state['entry'], {
              profile: res.data,
              public_repos: res.data.public_repos,
              public_gists: res.data.public_gists,
              followers: res.data.followers,
              following: res.data.following,
              pageCount: parseInt((res.data.public_repos / 30).toString()) + (res.data.public_repos % 30 > 0 ? 1 : 0)
            })
        }, () => {
          this._loadRepos();
        });
      }
    })
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
            // init test data
            this._initTestData();
            this._saveStorage();
          }
        });
    })
  }

  _readStorage(): void {
    console.log('1');
    let fleeceStorage = localStorage['fleece'];
    if (fleeceStorage === null || fleeceStorage === undefined) {
      this.setState({
        status: Object.assign({}, this.state['status'], { needUpdate: true })
      }, () => {
        this._loadProfile();
      });
      return;
    }
    let fleece: any = JSON.parse(fleeceStorage);
    if (moment.utc().valueOf() / 1000 - fleece.updateDate > 60 * 60 * 24) {
      this.setState({
        status: Object.assign({}, this.state['status'], { needUpdate: true })
      }, () => {
        this._loadProfile();
      });
    } else {
      // entry: Object.assign({}, this.state['entry'], { entry: fleece.entry })
      // this.setState({ entry: Object.assign({}, this.state['entry'], { entry: fleece.entry }) });
      this.setState({ entry: fleece.entry });
      this.setState({
        status: Object.assign({}, this.state['status'], { needUpdate: false })
      }, () => {
        this._initTestData();
      });
      this._finishLoading();
    }
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
    console.log('2');
    this.setState(Object.assign({}, this.state['status'], { isLoading: true }));
  }

  _finishLoading(): void {
    console.log('3');
    this.setState({
      status: Object.assign({}, this.state['status'], { isLoading: false })
    },
      () => {
      });
  }

  _initTestData(): void {
    let pinned_repos: any = [];
    this.state['entry']['repos'].forEach((repo: any, index: Number) => {
      if (index < 6) {
        pinned_repos.push(repo);
      }
    });
    // test update one prop
    this.setState({
      test: {
        p1: 5
      }
    })
    this.setState({
      entry: Object.assign({}, this.state['entry'], { pinned_repos: pinned_repos })
    });

  }

  render(): any {
    // let cards = this.state['entry']['repos'].map((repo: any) => {
    //   return <CardComponent children={repo} />
    // });
    console.log(this.state['test']);
    let isLoading = this.state['status']['isLoading'];
    let pinned_repos = this.state['entry']['pinned_repos'].map((repo: any) => {
      return <li className="border-gray-dark border rounded-1 mb-3"><PinnedRepoComponent children={repo} /></li>
    });

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
        <div className="org-head-component">
          <OrgHeadComponent children={this.state['org']['orgInfo']} />
        </div>
        <div className="pagehead-tabs-component">
          <TabsComponent children={this.state['org']['tabs']} />
        </div>
        <div className="pinned-repos-component">
          <h3 className="content-container">Pinned repositories </h3>
          <ol className="content-container">{pinned_repos}</ol>
        </div>
        <div className="org-repos-component">
          {org_repos}
        </div>
      </div>
    )
  }
}