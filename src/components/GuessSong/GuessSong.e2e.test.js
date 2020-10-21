import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessSong from './GuessSong';

Enzyme.configure({adapter: new Adapter()});

it(`When user genre question form is not sent`, () => {
  const question = {
    genre: `jazz`,
    answers: [
      {
        id: `id1`,
        src: `path`,
        genre: `rock`
      },
      {
        id: `id2`,
        src: `path`,
        genre: `jazz`
      },
      {
        id: `id3`,
        src: `path`,
        genre: `classic`
      },
      {
        id: `id4`,
        src: `path`,
        genre: `pop`
      }
    ]
  };
  const clickHandler = jest.fn();
  const app = shallow(
      <GuessSong
        question={question}
        onAnswer={clickHandler} />
  );
  const form = app.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention
  });
}
);
