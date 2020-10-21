import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtist from './GuessArtist';

Enzyme.configure({adapter: new Adapter()});

it(`When user artist song is not sent`, () => {
  const answer = {
    song: {
      src: `path`,
      artist: `John Doe`
    },
    answers: [
      {
        picture: `https://placehold.it/134x134`,
        artist: `Geralt`
      },
      {
        picture: `https://placehold.it/134x134`,
        artist: `Triss`
      },
      {
        picture: `https://placehold.it/134x134`,
        artist: `Lambert`
      },
      {
        picture: `https://placehold.it/134x134`,
        artist: `Vesemir`
      }
    ]
  };
  const clickHandler = jest.fn();
  const app = shallow(
      <GuessArtist
        answer={answer}
        onAnswer={clickHandler} />
  );
  const gameForm = app.find(`form`);
  const formSendPrevention = jest.fn();
  gameForm.simulate(`submit`, {
    preventDefault: formSendPrevention
  });
}
);
