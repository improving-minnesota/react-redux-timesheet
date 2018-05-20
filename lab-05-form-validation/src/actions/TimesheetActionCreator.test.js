import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './TimesheetActionCreator';
import * as types from './TimesheetActionTypes';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('synchronous actions', () => {
  it('list should send objects', () => {
    expect(actions.list(['p1', 'p2'])).toEqual({
      type: types.LIST,
      timesheets: ['p1', 'p2']
    });
  });

  it('get should send object', () => {
    expect(actions.get('p1')).toEqual({
      type: types.GET,
      timesheet: 'p1'
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

  it('creates LIST when fetching timesheets has been done', () => {
    moxios.stubRequest('/api/users/all/timesheets', {
      status: 200,
      response: ['timesheet1', 'timesheet2']
    });

    const expectedActions = [
      { type: types.LIST, timesheets: ['timesheet1', 'timesheet2'] }
    ];
    const store = mockStore({ timesheets: [] });

    return store.dispatch(actions.listTimesheets()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when requesting single timesheet', () => {
    moxios.stubRequest('/api/users/all/timesheets/1', {
      status: 200,
      response: 'timesheet1'
    });

    const expectedActions = [{ type: types.GET, timesheet: 'timesheet1' }];
    const store = mockStore({ timesheets: [] });

    return store.dispatch(actions.getTimesheet(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when updating a timesheet', () => {
    moxios.stubRequest('/api/users/all/timesheets/1', {
      status: 200,
      response: 'timesheet1'
    });

    const expectedActions = [{ type: types.GET, timesheet: 'timesheet1' }];
    const store = mockStore({ timesheets: [] });

    return store.dispatch(actions.updateTimesheet({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when removing a timesheet', () => {
    moxios.stubRequest('/api/users/all/timesheets/1', {
      status: 200,
      response: 'timesheet1'
    });

    const expectedActions = [{ type: types.GET, timesheet: 'timesheet1' }];
    const store = mockStore({ timesheets: [] });

    return store.dispatch(actions.removeTimesheet({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when restoring a timesheet', () => {
    moxios.stubRequest('/api/users/all/timesheets/1', {
      status: 200,
      response: 'timesheet1'
    });

    const expectedActions = [{ type: types.GET, timesheet: 'timesheet1' }];
    const store = mockStore({ timesheets: [] });

    return store.dispatch(actions.restoreTimesheet({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
