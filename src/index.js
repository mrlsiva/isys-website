import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from './Store'; // Adjust the path to where your store is defined
import './assets/css/bootstrap.min.css';
import "./assets/css/animate.css";
import "./assets/css/icons.css";
import "./assets/css/style.css";
import '../node_modules/bootstrap/dist/js/bootstrap';
import SimpleReactLightbox from 'simple-react-lightbox';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SimpleReactLightbox>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SimpleReactLightbox>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
