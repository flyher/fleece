import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Header } from '../components/shared/header'
import { Footer } from '../components/shared/footer';
import { FleeceComponent } from '../fleece/fleece';

ReactDOM.render(
  <div>
    <Header />
    <FleeceComponent />
    <Footer />
  </div>,
  document.getElementById('lcApp')
)