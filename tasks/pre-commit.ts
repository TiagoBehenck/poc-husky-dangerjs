import { execSync } from 'child_process'

const blockJSFileCommits = () => {
  const files = execSync('git diff --cached --name-only')
    .toString()
    .split('\n')
    .filter((file) => file.endsWith('.js'))
  if (files.length > 0) {
    console.error('[ERROR] > Você está tentando fazer um commit arquivos .js')
    console.error('[ERROR] > Por Favor, Utilize typescript (.ts ou .tsx)')
    console.log('--------------------------------------')
    console.log('Arquivos .js encontrados:')
    files.forEach((file) => console.log(`- ${file}`))
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
