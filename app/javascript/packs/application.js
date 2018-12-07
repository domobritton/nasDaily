import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { CloudinaryContext } from 'cloudinary-react';
import App from './components/App';
import $ from 'jquery';
import { ParallaxProvider } from 'react-scroll-parallax';

document.addEventListener('DOMContentLoaded', () => {
  window.$ = $; // make jquery global for debugging

  const WrappedApp = () => (
    <BrowserRouter>
        <ParallaxProvider>
          <CloudinaryContext cloudName="nasdaily">
            <Route path="/" component={App} />
          </CloudinaryContext>
        </ParallaxProvider>
    </BrowserRouter>
  );

  ReactDOM.render(
    <WrappedApp />,
    document.body.appendChild(document.createElement('div')),
  )
});

