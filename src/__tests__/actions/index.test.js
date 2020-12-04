import * as actions from '../../actions';

describe('bar tracker actions', () => {
  it('deleteBrew should create DELETE_BREW action', () => {
    expect(actions.deleteBrew(1)).toEqual({
      type: 'DELETE_BREW',
      id: 1
    });
  });
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
});