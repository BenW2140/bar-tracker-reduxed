import editBrewReducer from '../../reducers/edit-brew-reducer';

describe('editBrewReducer', () => {
  test('should return default state if no action is passed', () => {
    expect(editBrewReducer(false, { type: null })).toEqual(false);
  })
});