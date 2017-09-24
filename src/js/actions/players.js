export const addPlayer = (name) => {
  return {
    type: 'ADD_PLAYER',
    name
  }
} ;

export const removePlayer = (index) => {
  return {
    type: 'REMOVE_PLAYER',
    index
  }
};

export const editPlayerName = (index, name) => {
  return {
    type: 'EDIT_PLAYER_NAME',
    index,
    name
  }
}

export const updatePlayerScore = (index, score) => {
  return {
    type: 'UPDATE_PLAYER_SCORE',
    index,
    score
  }
}
