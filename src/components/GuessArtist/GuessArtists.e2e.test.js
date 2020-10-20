import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtist from './GuessArtist';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <GuessArtist
        answer={{answers: [
          {
            picture: `https://placehold.it/134x134`,
            artist: `321`
          },
          {
            picture: `https://placehold.it/134x134`,
            artist: `123`
          }
        ]}}
        onAnswer={clickHandler} />
  );
  const startButton = app.find(`.game__submit`);
  const gameForm = app.find(`.game__artist`);
  startButton.simulate(`click`);
  expect(gameForm).toBeUndefined();
}
);
