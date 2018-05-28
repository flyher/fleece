import * as React from 'react';

export class Header extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
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
    return (
      <div>
        <h1>header</h1>
      </div>
    );
  }
}