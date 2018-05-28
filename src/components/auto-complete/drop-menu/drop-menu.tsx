import * as React from 'react';
import { Group } from '../../../model/menu';
import './drop-menu.less';

// interface Obj {
//   groups: Array<Group>,
//   selected: Group
// }
// export class DropMenu extends React.Component<any,Obj>

export class DropMenu extends React.Component {
  private groups: Array<Group> = new Array<Group>();
  constructor(props: any) {
    super(props);
    // 构造函数是TS/ES6的特征，在这里无法setState，需要在react的生命周期中setState才可行
    // 所以如果在这里调用 _fetchItems方法是无法执行setState的
    // this._fetchItems();
  }

  componentWillMount(): void {
    this._fetchItems();
  }
  // getInitialState(): any {
  //   this._fetchItems();
  // 
  // https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state
  // Setting the Initial State
  // In ES6 classes, you can define the initial state by assigning this.state in the constructor:

  // class Counter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {count: props.initialCount};
  //   }
  //   // ...
  // }
  // With createReactClass(), you have to provide a separate getInitialState method that returns the initial state:

  // var Counter = createReactClass({
  //   getInitialState: function() {
  //     return {count: this.props.initialCount};
  //   },
  //   // ...
  // });
  // }

  async _fetchItems(): Promise<void> {
    // ajax
    this.groups = [
      {
        ID: 1,
        Key: 'g1',
        Value: 'group1'
      },
      {
        ID: 2,
        Key: 'g2',
        Value: 'group2'
      },
      {
        ID: 3,
        Key: 'g3',
        Value: 'group3'
      }
    ];
    this.setState({
      groups: this.groups,
      selected: this.groups[0]
    })
  }

  choiceOneGroup(item: any): void {
    this.setState({
      selected: item
    });
    this.forceUpdate();
    console.log(this.state['selected']);
  }


  render(): any {
    // let itemhtml = this.state['groups'].map((item: Group) => {
    //   return <li>{item.Value}</li>
    // });
    // why wrong?
    // let itemhtml1 =
    //   this.state['groups'].forEach((item: Group) => {
    //     return <li>{item.Value}</li>;
    //   });

    // let itemhtml2 = this.state['groups'].forEach(function (item: Group) {
    //   return <li>{item.Value}</li>;
    // });

    // let ul = 
    //   this.state.items.forEach(item => {
    //      <li>{item.value}</li>
    //   })
    // }
    return (
      // <div style={style.dropMenu}>
      //   <div style={style.title}>
      //     <span>Group</span>
      //     <span style={style.arrow}>▼</span>
      //   </div>
      //   <div style={style.menu}>
      //     <ul>
      //       {itemhtml}
      //     </ul>
      //   </div>
      // </div>
      <div className="drop-menu">
        <div className="group-show">
          {/* <input type="input" className="group-name" value="Group"/> */}
          <span className="group-name" title="{this.state['selected']}">{this.state['selected'].Value}</span>
          <span className="arrow">▼</span>
        </div>
        <div className="menu">
          <ul>
            {
              this.state['groups'].map((item: Group) => {
                return <li className="group" key={item.Key} onClick={() => { this.choiceOneGroup(item) }}>{item.Value}</li>
              })
            }
          </ul>
        </div>
      </div >
    );
  }
}

// const style = {
//   dropMenu: {
//     width: 100,
//     height: 30,
//     lineHeight: '30px',
//     borderWidth: 1,
//     // borderRadius: 4,
//     borderColor: 'silver',
//     borderStyle: 'solid'
//   },
//   title: {
//     width: '100%',
//     height: '100%',
//     // lineHeight:30
//   },
//   arrow: {
//     // float:right
//   },
//   menu: {
//     width: 100,
//     height: 100
//   }
// }