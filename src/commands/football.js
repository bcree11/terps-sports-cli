const {Command, flags} = require('@oclif/command')
const getGames = require('../fetchers/football')
const chalk = require('chalk')
const { cli } = require('cli-ux')
const Table = require('cli-table')
const table = new Table({
    head: [chalk.bold.underline('Home Team'),
            chalk.bold.underline('VS'),
            chalk.bold.underline('Away Team'),
            chalk.bold.underline('Date'),
            chalk.bold.underline('Time')
        ]
})

class FootballCommand extends Command {
  async run() {
    cli.action.start('Fetching game times')
    const games = await getGames()
    const {flags} = this.parse(FootballCommand)
    const team = flags.team || 'Maryland Terrapins'
    function getTerpsGames(){
      let newArray = games.filter(x => x.HomeTeamName === team || x.AwayTeamName === team)
      let game = newArray.map((x,i) => {
        let gameDate =  new Date(newArray[i].DateTime)
        let gameTime = gameDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
        gameDate = gameDate.toDateString()
        table.push(
          [`${x.HomeTeamName}`, 'VS', `${x.AwayTeamName}`, `${gameDate}`, `${gameTime} EST`]
        )
      })
      console.log(table.toString());
    }
    cli.action.stop()
    getTerpsGames()
  }
}

FootballCommand.description = `Get the game time of your favorite NCAA DI football team`

FootballCommand.flags = {
  team: flags.string({char: 't', description: `Enter your NCAAF team's name in quotations, e.g. "Maryland Terrapins"`}),
}

module.exports = FootballCommand
