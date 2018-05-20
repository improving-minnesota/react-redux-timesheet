const workshopSetup = require('./scripts/workshop-setup');
const execSync = require('child_process').execSync;
const validateYarn = require('./scripts/yarn-validator');

const verifySystem = workshopSetup.verifySystem;

verifySystem([
  verifySystem.validators.node('>=8.0.0'),
  validateYarn('>=1.0.0'),
  function validateFork() {
    const output = execSync('git remote -v').toString().match(/origin[^\n]+/);
    if (output.some(part => /objectpartners/.test(part))) {
      return `For the best experience, we recommend forking the repo at https://github.com/objectpartners/react-redux-timesheet.`;
    }
    return null;
  }
])
  .then(function() {
    console.log('🎉  Congrats! Your system is setup properly');
    console.log('You should be good to install and run things.');
  })
  .catch(function(err) {
    console.error(err);
});
