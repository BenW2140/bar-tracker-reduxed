import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import brewListReducer from '../../reducers/brew-list-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return default state if no action is passed', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterListOfBrews: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of brewListReducer matches root reducer', () => {
    expect(store.getState().masterListOfBrews).toEqual(brewListReducer(undefined, { type: null }));
  });

  test('Check that ADD_BREW action works for brewListReducer and root reducer', () => {
    const action = {
      type: 'ADD_BREW',
      name: 'brew',
      brand: 'home',
      price: 10,
      alcoholContent: 20,
      pints: 24,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterListOfBrews).toEqual(brewListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});