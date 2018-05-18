const {execSync} = require('child_process');
const semver = require('./semver');

function execValidator(desired, command, message) {
  const actual = execSync(command)
    .toString()
    .trim();
  return semver.satisfies(actual, desired) ? null : message(actual, desired);
}

module.exports = function getYarnValidator(desired) {
  return function validateYarn() {
    return execValidator(desired, 'yarn --version', actual => {
      return `Your version of yarn (${actual}) does not satisfy the desired range of ${desired}.`;
    });
  };
};