// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process')

const ADDED_FILE = 'A'
const JS_EXTENSION = {
  JS: 'js',
  JSX: 'jsx'
}
const GIT_COMMAND = 'git diff --cached --name-status' // https://git-scm.com/docs/git-diff/2.29.0

const findJSFile = (file) => {
  return (
    file
      .toString()
      .split('\n')
      .filter(
        (file) =>
          file.startsWith(ADDED_FILE) &&
          (file.endsWith(JS_EXTENSION.JS) || file.endsWith(JS_EXTENSION.JSX))
      ) || []
  )
}

const blockJSFileCommits = () => {
  const outputGit = execSync(GIT_COMMAND)
  const files = findJSFile(outputGit)

  if (files.length > 0) {
    console.error(
      '\x1b[41m[ERROR] > Você está tentando fazer um commit arquivos .js/.jsx\x1b[0m'
    )
    console.error('\x1b[41m[ERROR] > Por Favor, Utilize typescript (.ts ou .tsx)\x1b[0m')
    console.log('--------------------------------------')
    console.log('Arquivos .js/.jsx encontrados:')
    files.forEach((file) => console.log(`\x1b[7m - ${file}\x1b[0m`))
    console.log('--------------------------------------')
    console.log('para ignorar essa validação, utilize o comando:')
    console.log('git commit --no-verify')
    process.exit(1)
  } else {
    process.exit(0)
  }
}
// scripts precommit
blockJSFileCommits() // bloqueia commit de arquivos .js
