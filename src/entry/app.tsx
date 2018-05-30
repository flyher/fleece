import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './app.less';

import { HeaderComponent } from '../components/shared/header/header'
import { Footer } from '../components/shared/footer';
import { FleeceComponent } from '../page/fleece';

ReactDOM.render(
  <div className="app">
    <HeaderComponent />
    <FleeceComponent />
    <Footer />
  </div>,
  document.getElementById('lcApp')
)