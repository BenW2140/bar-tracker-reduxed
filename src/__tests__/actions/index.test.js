import * as actions from '../../actions';

describe('bar tracker actions', () => {
  it('deleteBrew should create DELETE_BREW action', () => {
    expect(actions.deleteBrew(1)).toEqual({
      type: 'DELETE_BREW',
      id: 1
    })
  });
});