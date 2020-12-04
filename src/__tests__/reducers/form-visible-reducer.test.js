import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {
  
  test('Should return default state if no action is passed', () => {
    expect (formVisibleReducer(false, { type: null })).toEqual(false);
  });
});