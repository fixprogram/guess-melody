import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer.create(
      <App
        data={{
          questions: [
            {
              type: `genre`,
              genre: `hip-hop`,
              answers: [
                {
                  src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback.ogg`,
                  genre: `jazz`
                }
              ]
            },
            {
              type: `artist`,
              song: {
                src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback.ogg`,
                artist: `Lambert`
              },
              answers: [
                {
                  picture: `https://placehold.it/134x134`,
                  artist: `Triss`
                }
              ]
            },
          ],
          mistakes: 0,
          time: 0
        }}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
}
);
