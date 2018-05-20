import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './ProjectActionCreator';
import * as types from './ProjectActionTypes';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('synchronous actions', () => {
  it('list should send objects', () => {
    expect(actions.list(['p1', 'p2'])).toEqual({
      type: types.LIST,
      projects: ['p1', 'p2']
    });
  });

  it('get should send object', () => {
    expect(actions.get('p1')).toEqual({
      type: types.GET,
      project: 'p1'
    });
  });
});

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('creates LIST when fetching projects has been done', () => {
    moxios.stubRequest('/api/projects', {
      status: 200,
      response: ['project1', 'project2']
    });

    const expectedActions = [
      { type: types.LIST, projects: ['project1', 'project2'] }
    ];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.listProjects()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when requesting single project', () => {
    moxios.stubRequest('/api/projects/1', {
      status: 200,
      response: 'project1'
    });

    const expectedActions = [{ type: types.GET, project: 'project1' }];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.getProject(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when updating a project', () => {
    moxios.stubRequest('/api/projects/1', {
      status: 200,
      response: 'project1'
    });

    const expectedActions = [{ type: types.GET, project: 'project1' }];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.updateProject({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when removing a project', () => {
    moxios.stubRequest('/api/projects/1', {
      status: 200,
      response: 'project1'
    });

    const expectedActions = [{ type: types.GET, project: 'project1' }];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.removeProject({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('create GET when restoring a project', () => {
    moxios.stubRequest('/api/projects/1', {
      status: 200,
      response: 'project1'
    });

    const expectedActions = [{ type: types.GET, project: 'project1' }];
    const store = mockStore({ projects: [] });

    return store.dispatch(actions.restoreProject({ _id: 1 })).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
