export default function(state = null, action) {
  switch (action.type) {
    case "ARTIST_SELECTED":
      return action.payload;
    default:
    return state;
  }
}
