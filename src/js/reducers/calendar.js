const calendar = (state=[], action) => {
  switch (action.type) {
    case "ADD_DAY":
      return [
        ...state,
        {
          location: action.payload.location,
          date: action.payload.date,
          vacation: action.payload.vacation,
          work: action.payload.work,
          id: action.payload.id
        }
      ]
      case "REMOVE_DAY":
        console.log(action.index)
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]
    default:
      return state
  }
}

export default calendar;
