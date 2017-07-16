import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
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

