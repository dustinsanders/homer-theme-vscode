const { execSync } = require('child_process')
const { name, version} = require('./package.json')

const vsix = `${name}-${version}.vsix`

console.log('vsix', vsix)

const commands = [
  'vsce package',
  `code --install-extension ${vsix}`,
]

commands.map(
  command => execSync(command, { stdio: 'inherit' })
)
