import './index.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import ReactDOM from 'react-dom/client';

// Google Tag Manager
const gtmId = import.meta.env.VITE_GTM_ID;
if (gtmId) {
  const gtmScript = document.createElement('script');
  gtmScript.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(gtmScript);

  const gtmNoscript = document.createElement('noscript');
  gtmNoscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;
  document.body.appendChild(gtmNoscript);
}

// Simple test to see if React is working
const TestComponent = () => {
  return (
    <div className="bg-red-100 p-4">
      <h1 className="text-2xl font-bold">Test Component</h1>
      <p>If you can see this, React is working!</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <TestComponent />
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
