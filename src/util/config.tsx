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
      value: 'github',
      text: 'Github',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 96,
      selected: true
    }, {
      id: 2,
      value: 'github',
      text: 'Github',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 23,
      selected: false
    }, {
      id: 3,
      value: 'github',
      text: 'Github',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 13,
      selected: false
    }, {
      id: 4,
      value: 'github',
      text: 'Github',
      link: Config.URL_GITHUB_HOST + '/' + Config.userName,
      counter: 0,
      selected: false
    }
  ]
}