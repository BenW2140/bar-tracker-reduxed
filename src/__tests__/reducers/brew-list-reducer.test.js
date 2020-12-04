import brewListReducer from '../../reducers/brew-list-reducer';
import * as c from '../../actions/ActionTypes';

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
  const currentState = {
    1: {
      name: 'brew',
      brand: 'home',
      price: 5,
      alcoholContent: 20,
      pints: 10,
      id: 1
    },
    2: {
      name: 'booze',
      brand: 'snooze',
      price: 10,
      alcoholContent: 40,
      pints: 15,
      id: 2
    }
  }

  test('Should return default stateif no action type is passed into reducer', () => {
    expect(brewListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new brew data to brew list', () => {
    const { name, brand, price, alcoholContent, pints, id } = brewData;
    action = {
      type: c.ADD_BREW,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };

    expect(brewListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

  test('Should delete a brew', () => {
    action = {
      type: c.DELETE_BREW,
      id: 1
    };
    expect(brewListReducer(currentState, action)).toEqual({
      2: {
        name: 'booze',
        brand: 'snooze',
        price: 10,
        alcoholContent: 40,
        pints: 15,
        id: 2
      }
    });
  });
});