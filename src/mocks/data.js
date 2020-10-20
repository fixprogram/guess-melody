const data = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          id: `id1`,
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `pop`
        },
        {
          id: `id2`,
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `rock`
        },
        {
          id: `id3`,
          src: `https://upload.wikimedia.org/wikipedia/ru/e/e5/Nickelback_-_If_Everyone_Cared_cropped.ogg`,
          genre: `k-pop`
        },
        {
          id: `id4`,
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
