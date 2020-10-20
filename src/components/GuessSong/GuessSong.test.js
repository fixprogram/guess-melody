import React from 'react';
import renderer from 'react-test-renderer';
import GuessSong from './GuessSong';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
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
        onAnswer={jest.fn()} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
