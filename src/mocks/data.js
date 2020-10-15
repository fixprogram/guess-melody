const data = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `pop`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `rock`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `k-pop`
        },
        {
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `k-rock`
        }
      ]
    },
    {
      type: `artist`,
      song: {
        src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
        artist: `Nickelback`
      },
      answers: [
        {
          picture: `https://placehold.it/134x134`,
          artist: `Nickelback`
        },
        {
          picture: `https://placehold.it/134x134`,
          artist: `Geralt`
        },
        {
          picture: `https://placehold.it/134x134`,
          artist: `Aragon`
        },
        {
          picture: `https://placehold.it/134x134`,
          artist: `Jack Sparrow`
        }
      ]
    },
  ],
  mistakes: 5,
  time: 10
};

export default data;
