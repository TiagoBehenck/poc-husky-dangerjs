### Compare Husky with Danger

### Pre requisites

Required NodeJS >= 18

#### [Husky](https://typicode.github.io/husky/getting-started.html)

- Based on [Git hooks](https://git-scm.com/docs/githooks)
- Lightweight with zero dependencies (6 kB)
- Powered by modern new Git feature (core.hooksPath)
- Follows npm and Yarn best practices regarding autoinstall
- User-friendly messages
- Use with Prettier and ESLint

#### [DangerJS](https://danger.systems/js/)

- [Danger File](https://danger.systems/js/guides/the_dangerfile) to setup the rules
- Open comment in PR/MR 
- Have a token to acess the repo and write the comment
- Rules to open PR/MR, like description message
- *On docs doesn`t show how to setup CI with Azure*

Example of rules 

https://github.com/artsy/emission/blob/master/dangerfile.ts
https://github.com/danger/danger-js/blob/main/dangerfile.ts
https://github.com/bamlab/dev-standards/blob/master/dangerfile.js
https://github.com/facebook/react/blob/main/dangerfile.js
https://github.com/facebook/react-native/blob/main/packages/react-native-bots/dangerfile.js

#### Articles

https://oieduardorabelo.medium.com/aplicando-padr%C3%B5es-de-c%C3%B3digo-com-pr%C3%A9-commit-hook-usando-husky-a72a51512a6d

https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/#step-2-configuring-husky-to-run-git-hooks

https://www.youtube.com/watch?v=J2ITov8r0Rs

https://danger.systems/js/guides/getting_started.html#setting-up-danger-to-run-on-your-ci

https://medium.com/hackernoon/dont-be-the-bad-cop-in-pull-request-reviews-let-software-do-that-job-1eb9e574c2d1