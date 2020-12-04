import brewListReducer from '../../reducers/brew-list-reducer';

describe('brewListReducer', () => {

  let action;
  const brewData = {
    name: 'brew',
    brand: 'home',
    price: 5,
    alcoholContent: 20,
    pints: 10,
    id: 1
  };

  test('Should return default stateif no action type is passed into reducer', () => {
    expect(brewListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new brew data to brew list', () => {
    const { name, brand, price, alcoholContent, pints, id } = brewData;
    action = {
      type: 'ADD_BREW',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };

    expect(brewListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });
});