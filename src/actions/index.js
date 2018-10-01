export function selectArtist(artist) {
  return {
    type: "ARTIST_SELECTED",
    payload: artist
  };
}
