export function selectArtist(artist) {
  return {
    type: 'ARTIST_SELECTED',
    payload: artist
  };
}

export function noLove(artist) {
  return {
    type: 'NO_LOVE',
    payload: artist
  }
}
