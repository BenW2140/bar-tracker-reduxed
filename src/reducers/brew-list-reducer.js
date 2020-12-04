export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, pints, id } = action;
  switch (action.type) {
    case 'ADD_BREW':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          pints: pints,
          id: id
        }
      });
    default:
      return state;
  }
  
}