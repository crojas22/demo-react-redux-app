const players = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          name: action.name.name,
          score: 0,
          isEditing: false
        }
      ];
    break;

    case 'REMOVE_PLAYER':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    break;

    case 'UPDATE_PLAYER_SCORE':
      return state.map((player, index) => {
        if(index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          }
        }
        return player
      })

    case 'EDIT_PLAYER_NAME':
    return state.map((player, index) => {
      if(index === action.index && action.name.length > 0) {
        return {
          ...player,
          isEditing: !player.isEditing,
          name: action.name
        }
      }
      return player
    })

    default:
      return state
  }
}

export default players;
