import React from 'react';
import renderer from 'react-test-renderer';
import GuessSong from './GuessSong';

it(`When user genre question form is not sent`, () => {
  const question = {
    genre: `pop`,
    answers: [
      {
        src: `path`,
        genre: `classic`
      },
      {
        src: `path`,
        genre: `rap`
      }
    ]
  };
  const tree = renderer.create(
      <GuessSong
        question = {question}
        onAnswer={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
