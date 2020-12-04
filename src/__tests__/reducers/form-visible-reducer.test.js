import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
  test('Should return default state if no action is passed', () => {
    expect (formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });
});