import * as React from 'react';
import { DropMenu } from './drop-menu/drop-menu';
import './auto-complete.less';

export class AutoComplete extends React.Component {
  render() {
    return (
      <div className="auto-complete" style={style.autoComplete}>
        <div style={style.panel}>
          <div>高级搜索</div>
          <div><hr /></div>
          <div>
            <DropMenu/>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  autoComplete: {
    width: 340,
    height: 220,
    borderWidth: 1,
    // borderRadius: 4,
    borderColor: 'silver',
    borderStyle: 'solid'
  },
  panel: {
    width: 320,
    height: 200,
    margin: 10,

  }
}