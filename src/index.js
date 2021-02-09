import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {DataProvider} from './components/data-context/DataContext';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
