import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessSong from './GuessSong';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <GuessSong
        genre ={`hip-hop`}
        answers = { [
          {
            src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback.ogg`,
            genre: `rap`
          },
          {
            src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback.ogg`,
            genre: `classic`
          }
        ] }
        onAnswer={clickHandler} />
  );
  const startButton = app.find(`.game__submit`);
  const songForm = app.find(`.game__tracks`);
  startButton.simulate(`click`);
  expect(songForm).toBeUndefined();
}
);
