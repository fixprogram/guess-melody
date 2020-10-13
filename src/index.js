import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const init = () => {
  ReactDOM.render(
      <App mistakes="3" time="10" onClick="function() {}" />,
      document.querySelector(`#root`)
  );
};

init();
