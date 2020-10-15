import data from './mocks/data';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

const init = () => {
  ReactDOM.render(
      <App data={data} />,
      document.querySelector(`#root`)
  );
};

init();
