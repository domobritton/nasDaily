import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import App from './components/App';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $; // make jquery global for debugging

  const WrappedApp = () => (
    <BrowserRouter>
      <CloudinaryContext cloudName="nasdaily">
        <Route path="/" component={App} />
      </CloudinaryContext>
    </BrowserRouter>
  );

  ReactDOM.render(
    <WrappedApp />,
    document.body.appendChild(document.createElement('div')),
  )
});

