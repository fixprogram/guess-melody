/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import GuessArtist from '../GuessArtist/GuessArtist';
import GuessSong from '../GuessSong/GuessSong';

class App extends React.PureComponent {
  static getScreen(question, props, onUserAnswer) {

    if (question === -1) {
      const {
        time,
        mistakes,
      } = props.data;

      return <WelcomeScreen time={time} mistakes={mistakes} onClick={onUserAnswer} />;
    }

    const questions = props.data.questions;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GuessSong question={currentQuestion} onAnswer={onUserAnswer} />;
      case `artist`: return <GuessArtist answer={currentQuestion} onAnswer={onUserAnswer} />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      question: -1
    };
  }

  render() {
    const {
      questions
    } = this.props.data;

    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;
        return {question: !isEnd ? nextIndex : -1};
      });
    });
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired
};

export default App;
