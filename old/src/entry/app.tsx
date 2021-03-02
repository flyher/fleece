import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './app.less';

import { HeaderComponent } from '../components/shared/header/header'
import { FooterComponent } from '../components/shared/footer/footer';
import { FleeceComponent } from '../page/fleece';

ReactDOM.render(
  <div className="app">
    <HeaderComponent />
    <FleeceComponent />
    <FooterComponent />
  </div>,
  document.getElementById('lcApp')
)