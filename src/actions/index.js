export const deleteBrew = id => ({
  type: 'DELETE_BREW',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addBrew = (brew) => {
  const { name, brand, price, alcoholContent, pints, id } = brew;
  return {
    type: 'ADD_BREW',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
};