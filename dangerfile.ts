import { message, danger, fail } from 'danger'

const modifiedMD = danger.git.modified_files.join('- ')
message('Changed Files in this PR: \n - ' + modifiedMD)

if (danger.github.pr.body) {
  fail('This pull request needs a description')
}
