import rootReducer from '../../reducers/index';

describe('rootReducer', () => {
  test('should return default state if no action is passed', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterListOfBrews: {},
      formVisibleOnPage: false
    });
  });
});