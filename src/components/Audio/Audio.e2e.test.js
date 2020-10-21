import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Audio from './Audio';

Enzyme.configure({adapter: new Adapter()});

it(`When user genre question form is not sent`, () => {
  let isPlaying = false;
  const clickHandler = () => {
    isPlaying = !isPlaying;
  };
  const app = shallow(
      <Audio
        src='path'
        isPlaying={false}
        onPlayButtonClick={clickHandler} />
  );
  const trackButton = app.find(`.track__button`);
  trackButton.simulate(`click`);
  expect(isPlaying).toBe(true);
}
);
