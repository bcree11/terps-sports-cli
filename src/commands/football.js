const {Command, flags} = require('@oclif/command')
const getGames = require('../fetchers/football')

class FootballCommand extends Command {

  async run() {
    const game = await getGames()
    const {flags} = this.parse(FootballCommand)
    const name = flags.name || 'world'
    console.log(game);
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
