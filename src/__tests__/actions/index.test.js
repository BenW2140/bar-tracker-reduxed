import * as actions from '../../actions';
import * as c from '../../actions/ActionTypes';

describe('bar tracker actions', () => {
  it('deleteBrew should create DELETE_BREW action', () => {
    expect(actions.deleteBrew(1)).toEqual({
      type: c.DELETE_BREW,
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
  it('addBrew should create ADD_BREW action', () => {
    expect(actions.addBrew(
      {
        name: 'brew', 
        brand: 'home', 
        price: 10, 
        alcoholContent: 53, 
        pints: 14, 
        id: 1
      })).toEqual({
        type: c.ADD_BREW,
        name: 'brew', 
        brand: 'home', 
        price: 10, 
        alcoholContent: 53, 
        pints: 14, 
        id: 1
    });
  });
});