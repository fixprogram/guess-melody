/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
      <button className="welcome__button" onClick={props.onClick}><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {props.time} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {props.mistakes} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default App;
