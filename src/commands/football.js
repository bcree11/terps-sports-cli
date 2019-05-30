const {Command, flags} = require('@oclif/command')

class FootballCommand extends Command {
  async run() {
    const {flags} = this.parse(FootballCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /Users/bcree/Desktop/terps-sports-cli/src/commands/football.js`)
  }
}

FootballCommand.description = `Describe the command here
...
Extra documentation goes here
`

FootballCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = FootballCommand
