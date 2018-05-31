import * as React from 'react';
import './header.less';

export class HeaderComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      entry: {
        menus: [
          {
            id: 1,
            value: 'github',
            text: 'Github',
            url: 'https://www.github.com/'
          }, {
            id: 2,
            value: 'issues',
            text: 'Issues',
            url: 'https://www.github.com/'
          }, {
            id: 3,
            value: 'explore',
            text: 'Explore',
            url: 'https://www.github.com/'
          },
        ]
      }
    };
  }

  // Mounting
  // These methods are called when an instance of a component is being created and inserted into the DOM:
  componentWillMount() {
    this.showMsg('Mounting componentWillMount');
  }

  componentDidMount() {
    this.showMsg('Mounting componentDidMount');
  }

  // Updating
  // An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:
  componentWillReceiveProps() {
    this.showMsg('Updating componentWillReceiveProps');
  }

  // shouldComponentUpdate() {
  //   this.showMsg('Updating shouldComponentUpdate');
  // }

  componentWillUpdate() {
    this.showMsg('Updating componentWillUpdate');
  }

  componentDidUpdate() {
    this.showMsg('Updating componentDidUpdate');
  }

  // Unmounting
  // This method is called when a component is being removed from the DOM
  componentWillUnmount() {
    this.showMsg('Unmounting componentWillUnmount');
  }

  // Error Handling
  // This method is called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.
  componentDidCatch() {
    this.showMsg('Error Handling componentDidCatch');
  }

  showMsg(message: string): void {
    console.log(message);
  }
  render(): any {
    let menus = this.state['entry']['menus'].map((menu: any) => {
      return <li>
        <a href={menu.url} className="px-2">{menu.text}</a>
      </li>
    });
    return (
      <div className="header-component">
        <div className="container">
          <div className="header-logo">
            <a href="#">
              <svg height="32" className="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
          </div>
          <div className="header-menu">
            <div className="navigation">
              <input type="text" placeholder="Search or jump to…" />
              <ul>
                {menus}
              </ul>
            </div>
            <div className="user-links"></div>
          </div>
        </div>
      </div>
    );
  }
}