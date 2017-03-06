import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/index'
import * as types from  '../../src/actions/index'
import { expect } from 'chai';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('calculation actions', () => {

  it('should calculate a new pace when a new time is entered', () => {

    const expectedActions = [
      { type: types.UPDATE_CALCULATOR, body: { data: [pace:'10:00:00']  }
    ];
    const store = mockStore({ data: [] });

    return store.dispatch(actions.calculateNewPace());
      expect(store.getActions()).toEqual(expectedActions);
  });
});
