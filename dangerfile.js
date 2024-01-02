import { message, danger, fail } from "danger";

const modifiedMD = danger.git.modified_files.join("- ");
message("Changed Files in this PR: \n - " + modifiedMD);

if (danger.github.pr.body && danger.github.pr.body.length < 10) { 
  fail("This pull request needs a description")
}