import brewListReducer from '../../reducers/brew-list-reducer';

describe('brewListReducer', () => {
  test('Should return default stateif no action type is passed into reducer', () => {
    expect(brewListReducer({}, { type: null })).toEqual({});
  });
});