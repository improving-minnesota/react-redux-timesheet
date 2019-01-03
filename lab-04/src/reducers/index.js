import { combineReducers } from 'redux';
import projects from './project-reducer';
import timesheets from './timesheet-reducer';
import timeunits from './timeunits-reducer';
import employees from './employee-reducer';

const rootReducer = combineReducers({
  projects: projects,
  timesheets: timesheets,
  timeunits: timeunits
});

export default rootReducer;
