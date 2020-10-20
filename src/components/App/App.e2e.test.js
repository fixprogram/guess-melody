import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {
  const app = shallow(
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
  );
  expect(app).anything();
}
);
