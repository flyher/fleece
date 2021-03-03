// const version = '1.0.0';
// const url_github_host = 'https://www.github.com';
// exports.URL_GITHUB_HOST = url_github_host;
// exports.VERSION = version;

// export const URL_GITHUB_HOST = url_github_host;

export class Config {
  static URL_GITHUB_HOST: string = 'https://www.github.com';
  static URL_BITBUCKET_HOST = 'https://www.bitbucket.org';
  static siteName = 'Fleece';
  static userName = 'flyher';
  static userName2 = '99diary';

  static headerMenu = [
    {
      id: 1,
      value: 'oldFleece',
      text: 'Old Fleece',
      url: '/old/index.html'
    },
    {
      id: 2,
      value: 'fleece',
      text: 'Fleece',
      url: 'https://fleece.99diary.com/'
    }, {
      id: 3,
      value: 'blog',
      text: 'blog',
      url: 'https://blog.99diary.com/'
    }];

  static orgInfo = {
    profile: {
      avator: 'https://avatars3.githubusercontent.com/u/5570324?s=460&v=4',
      orgName: 'Fleece',
      author: Config.userName,
      describe: 'Open source for public project',
      location: 'xx,China',
      link: 'https://blog.99diary.com/2021/03/02/the-refactor-for-fleece',
      mail: 'admin#xxx.com'
    }
  }
  static tabs = [
    {
      id: 1,
      value: `${Config.userName}@github`,
      text: `${Config.userName}@github`,
      userName: Config.userName,
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 0,
      private: false,
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
      value: `${Config.userName2}@github`,
      text: `${Config.userName2}@github`,
      userName: Config.userName2,
      link: `${Config.URL_GITHUB_HOST}/${Config.userName2}`,
      counter: 0,
      private: false,
      api: {
        profile: 'https://api.github.com/users/{userName}',
        repos: 'https://api.github.com/users/{userName}/repos?'
      },
      pinned: [
        {
          id: 1,
          name: 'page-diary365-react-native'
        },
        {
          id: 2,
          name: 'KittyBlog'
        }, {
          id: 3,
          name: 'mdblog'
        }
      ],
      selected: false
    }, {
      id: 3,
      value: 'bitbucket',
      text: 'Bitbucket',
      userName: Config.userName,
      link: `${Config.URL_BITBUCKET_HOST}/${Config.userName}`,
      counter: 0,
      private: true,
      api: {
        repos: 'https://api.bitbucket.org/2.0/repositories/{userName}'
      },
      selected: false
    }, {
      id: 4,
      value: 'local',
      text: 'Local',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 0,
      private: true,
      selected: false
    }
  ]
}