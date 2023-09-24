import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { PtoFunnelAppProvider } from './contexts/PtoFunnelAppContext';
import { PtoFunnelAppProvider } from './file';

const formsMap = new Map();

formsMap.set(1, {
  title: "Title",
  price: 100,
  pages: [
    {
      inputs: [
        {
          label: "Test Input Email",
          type: "email",
          key: 1,
          name: "test-input-email"
        }
      ]
    },
    {
      inputs: [
        {
          label: "Test Input Text",
          type: "text",
          key: 2,
          name: "test-input-text"
        },
        {
          label: "Test Input Radio",
          type: "radio",
          key: 3,
          name: "test-input-radio"
        }
      ]  
    },
  ]
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <PtoFunnelAppProvider value={{
    isPurchase: false,
    email: "test@tmp.org",
    firstName: "firstName",
    lastName: "lastName",
    forms: formsMap
  }}>
    <App />
  </PtoFunnelAppProvider>
);
