import * as React from 'react';
// import './header.scss';
import { Config } from '../../../resource/config';
import { Navbar, Nav } from 'react-bootstrap';

export class HeaderComponent extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      title: Config.siteName,
      entry: {
        menus: Config.headerMenu
      }
    };
  }

  componentDidMount() {
    this.showMsg('Mounting componentDidMount');
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
    console.log(message);/* eslint no-console: 0*/
  }
  render(): any {
    let menus = this.state['entry']['menus'].map((menu: any) => {
      return <Nav.Link href={menu.url} key={menu.id}>
        {menu.text}
      </Nav.Link>
    });
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">{this.state['title']}</Navbar.Brand>
          <Nav className="mr-auto">
            {menus}
          </Nav>
        </Navbar>
      </>
    );
  }
}