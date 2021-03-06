import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtist from './GuessArtist';

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
  const tree = renderer.create(
      <GuessArtist
        answer={answer}
        onAnswer={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
