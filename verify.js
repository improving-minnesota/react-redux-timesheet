var workshopSetup = require('./scripts/workshop-setup');
var execSync = require('child_process').execSync;

var verifySystem = workshopSetup.verifySystem;

verifySystem([
  verifySystem.validators.node('>=8.0.0'),
  verifySystem.validators.yarnNpm('>=1.0.0', '>=5.0.0'),
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
