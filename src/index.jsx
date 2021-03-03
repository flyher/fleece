// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import './App.scss';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import './App.scss';
// import pageSource from './resource/page-resource';

// import { HeaderComponent } from './components/shared/header/header';
// import { FooterComponent } from './components/shared/footer/footer';
// import { FleeceComponent } from './page/fleece';

// function App() {
//   return (
//     <div className="App">
//       <Header title={pageSource.Header.title} menus={pageSource.Header.menus} />
//       <Body />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global/app.scss';
// import './global/app.scss';
// import reportWebVitals from './reportWebVitals';

import { HeaderComponent } from './components/shared/header/header'
import { FooterComponent } from './components/shared/footer/footer';
import { FleeceComponent } from './page/fleece';

ReactDOM.render(
  // <React.StrictMode>
  <div className="app">
    <HeaderComponent />
    <FleeceComponent />
    <FooterComponent />
  </div>,
  // </React.StrictMode>,
  document.getElementById('root')
);
// reportWebVitals();