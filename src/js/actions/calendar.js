let nextId = 0;

export const addDay = (item) => {
  return {
    type: 'ADD_DAY',
    payload: {
      ...item,
      id: nextId++
    }
  };
};

export const removeDay = (index) => {
  return {
    type: 'REMOVE_DAY',
    index
  };
};
