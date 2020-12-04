import * as c from './ActionTypes'

export const deleteBrew = id => ({
  type: c.DELETE_BREW,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addBrew = (brew) => {
  const { name, brand, price, alcoholContent, pints, id } = brew;
  return {
    type: c.ADD_BREW,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
};