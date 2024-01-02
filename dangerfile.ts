import { warn } from 'console';
import { message, danger, fail } from 'danger'

const modifiedAppFiles = danger.git.modified_files
const modifiedMD = modifiedAppFiles.join('- ')
message('Changed Files in this PR: \n - ' + modifiedMD)

if (danger.github.pr.body) {
  fail('This pull request needs a description')
}

// keep lockfile up to date
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');

if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}

const hasAppChanges = modifiedAppFiles.length > 0;

const testChanges = modifiedAppFiles.filter(filepath =>
  filepath.includes('test'),
);
const hasTestChanges = testChanges.length > 0;

// Warn if there are library changes, but not tests
if (hasAppChanges && !hasTestChanges) {
  warn(
    "There are files changes, but not tests. That's OK as long as you're refactoring existing code",
  );
}
