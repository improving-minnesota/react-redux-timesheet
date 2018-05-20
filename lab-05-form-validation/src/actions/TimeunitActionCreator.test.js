import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './TimeunitActionCreator';
import * as types from './TimeunitActionTypes';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('synchronous actions', () => {
  it('list should send objects', () => {
    expect(actions.list(['p1', 'p2'])).toEqual({
      type: types.LIST,
      timeunits: ['p1', 'p2']
    });
  });

  it('get should send object', () => {
    expect(actions.get('p1')).toEqual({
      type: types.GET,
      timeunit: 'p1'
    });
  });
});

describe('async actions', () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });

  it('creates LIST when fetching timeunits has been done', () => {
    moxios.stubRequest('/api/users/all/timesheets/99/timeunits', {
      status: 200,
      response: ['timeunit1', 'timeunit2']
    });

    const expectedActions = [
      { type: types.LIST, timeunits: ['timeunit1', 'timeunit2'] }
    ];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.listTimeunits(99)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when requesting single timeunit', () => {
    moxios.stubRequest('/api/users/all/timesheets/99/timeunits/1', {
      status: 200,
      response: 'timeunit1'
    });

    const expectedActions = [{ type: types.GET, timeunit: 'timeunit1' }];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.getTimeunit(99, 1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when updating a timeunit', () => {
    moxios.stubRequest('/api/users/all/timesheets/99/timeunits/1', {
      status: 200,
      response: 'timeunit1'
    });

    const expectedActions = [{ type: types.GET, timeunit: 'timeunit1' }];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.updateTimeunit(99, { _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when removing a timeunit', () => {
    moxios.stubRequest('/api/users/all/timesheets/99/timeunits/1', {
      status: 200,
      response: 'timeunit1'
    });

    const expectedActions = [{ type: types.GET, timeunit: 'timeunit1' }];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.removeTimeunit(99, { _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when restoring a timeunit', () => {
    moxios.stubRequest('/api/users/all/timesheets/99/timeunits/1', {
      status: 200,
      response: 'timeunit1'
    });

    const expectedActions = [{ type: types.GET, timeunit: 'timeunit1' }];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.restoreTimeunit(99, { _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when posting a new timeunit', () => {
    moxios.stubOnce('POST', '/api/users/all/timesheets/99/timeunits', {
      status: 201,
      response: 'timeunit1'
    });

    const expectedActions = [{ type: types.GET, timeunit: 'timeunit1' }];
    const store = mockStore({ timeunits: [] });

    return store.dispatch(actions.createTimeunit(99, { _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
