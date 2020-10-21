import React from 'react';
import renderer from 'react-test-renderer';
import Audio from './Audio';

it(`When user genre question form is not sent`, () => {
  const song = `path`;
  const tree = renderer.create(
      <Audio
        src={song}
        isPlaying={false}
        onPlayButtonClick={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
