export default function(state = [], action) {
  switch (action.type) {
    case "ARTIST_SELECTED":
      let selectedArtist= action.payload.name;
      let newState = [...state, { name: selectedArtist }]
      return newState;
    default:
      return state;
  }
}
