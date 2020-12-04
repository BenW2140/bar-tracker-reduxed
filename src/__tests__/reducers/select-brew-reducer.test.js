import selectBrewReducer from '../../reducers/select-brew-reducer';

describe('selectBrewReducer', () => {
  test('should return default state if no action is passed', () => {
    expect(selectBrewReducer({}, { type: null })).toEqual({});
  });
});