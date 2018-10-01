const originalList = 
{
  artists: 
    [
      { name: 'Stephan', pic: 'https://m.media-amazon.com/images/M/MV5BMjExODkxODU3NF5BMl5BanBnXkFtZTgwNTM0MTk3NjE@._V1_SY1000_CR0,0,721,1000_AL_.jpg', love: undefined },
      { name: 'Janice', pic: 'https://m.media-amazon.com/images/M/MV5BMTU4MTY2ODExMV5BMl5BanBnXkFtZTcwMzEwNzY2NA@@._V1_SY1000_CR0,0,765,1000_AL_.jpg', love: undefined },
      { name: 'Andre', pic: 'https://m.media-amazon.com/images/M/MV5BOGU4N2ZhYzAtY2JjMi00OTFkLTg4YjctOTk4Y2ZmOTFkN2Y3XkEyXkFqcGdeQXVyMzk0NzEzNjI@._V1_SY1000_CR0,0,666,1000_AL_.jpg', love: undefined },
      { name: 'Arthur', pic: 'https://m.media-amazon.com/images/M/MV5BMjI1MjAzMTI1M15BMl5BanBnXkFtZTgwMzI5NTEwNjE@._V1_SY1000_CR0,0,790,1000_AL_.jpg', love: undefined },
      { name: 'Ernestine', pic: 'https://m.media-amazon.com/images/M/MV5BMTEzNzcwODU0ODJeQTJeQWpwZ15BbWU4MDQ5MzE4MDYz._V1_SY1000_CR0,0,664,1000_AL_.jpg', love: undefined },
    ],
    loved: []
}

export default function (state = originalList, action) {
  switch (action.type) {
    case "ARTIST_SELECTED":
      let newState = { ...state }
      let lovedArtist = newState.artists.shift();
      newState.loved.push(lovedArtist);
      return newState;
    case 'NO_LOVE':
      let NoLoveState = { ...state };
      NoLoveState.artists.shift();
      return NoLoveState;
    default:
    return state;
  }
}
