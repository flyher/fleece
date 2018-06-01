// const version = '1.0.0';
// const url_github_host = 'https://www.github.com';
// exports.URL_GITHUB_HOST = url_github_host;
// exports.VERSION = version;

// export const URL_GITHUB_HOST = url_github_host;

export class Config {
  public static URL_GITHUB_HOST = 'https://www.github.com';
  public static userName = 'flyher';
  public static orgInfo = {
    profile: {
      avator: 'https://avatars1.githubusercontent.com/u/9919?s=200&v=4',
      orgName: 'Fleece',
      author: 'Fleece',
      describe: 'Open source, from xx with love',
      location: 'New York,USA',
      link: 'https://www.test.com',
      mail: 'test@test.com'
    }
  }
  public static tabs = [
    {
      id: 1,
      value: 'flyher@github',
      text: 'flyher@Github',
      userName: 'flyher',
      link: Config.URL_GITHUB_HOST + '/flyher',
      counter: 0,
      api: {
        profile: 'https://api.github.com/users/{userName}',
        repos: 'https://api.github.com/users/{userName}/repos?'
      },
      pinned: [
        {
          id: 1,
          name: 'sheep'
        },
        {
          id: 2,
          name: 'ant-colony'
        },
        {
          id: 3,
          name: 'fleece'
        },
        {
          id: 4,
          name: 'totoro'
        },
        {
          id: 5,
          name: 'zhihu-react-native'
        },
        {
          id: 6,
          name: 'ColorPicker'
        },
        {
          id: 7,
          name: 'BlogBackup163'
        }, {
          id: 8,
          name: 'shumeipai'
        }, {
          id: 9,
          name: 'FivePies'
        }
      ],
      selected: true
    }, {
      id: 2,
      value: '99diary@github',
      text: '99diary@Github',
      userName: '99diary',
      link: Config.URL_GITHUB_HOST + '/99diary',
      counter: 0,
      api: {
        profile: 'https://api.github.com/users/99diary',
        repos: 'https://api.github.com/users/99diary/repos?'
      },
      pinned: [
        {
          id: 1,
          name: 'sheep'
        },
        {
          id: 2,
          name: 'ant-colony'
        }
      ],
      selected: false
    }, {
      id: 3,
      value: 'bitbucket',
      text: 'Bitbucket',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 0,
      selected: false
    }, {
      id: 4,
      value: 'local',
      text: 'Local',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 0,
      selected: false
    }
  ]
  public diary99 = [];
}