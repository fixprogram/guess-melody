import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtist from './GuessArtist';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
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
        onAnswer={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
