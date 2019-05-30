const {Command, flags} = require('@oclif/command')
const getGames = require('../fetchers/football')
const footballApi = 'https://api.sportsdata.io/v3/cfb/scores/json/Games/2019?key=9bfa4a1538614f7a8538c39a32a4a381'
const chalk = require('chalk')
const { cli } = require('cli-ux')
const Table = require('cli-table')
const table = new Table({
    head: [chalk.bold.underline('Home Team'),
            chalk.bold.underline('VS'),
            chalk.bold.underline('Away Team'),
            chalk.bold.underline('Score (H-A)'),
            chalk.bold.underline('Date'),
            chalk.bold.underline('Time'),
        ]
})

class FootballCommand extends Command {
  async run() {
    cli.action.start('Filtering game times')
    const games = await getGames(footballApi)
    const {flags} = this.parse(FootballCommand)
    const team = flags.team || 'Maryland Terrapins'
    function getTerpsGames(){
      let filterGames = games.filter(x => x.HomeTeamName === team || x.AwayTeamName === team)
      let game = filterGames.map((x,i) => {
        let gameDate =  new Date(filterGames[i].DateTime)
        let gameTime = gameDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
        gameDate = gameDate.toDateString()
        let score = x.HomeTeamScore ? `${x.HomeTeamScore}-${x.AwayTeamScore}` : 'Upcoming'
        table.push(
          [`${x.HomeTeamName}`, 'VS', `${x.AwayTeamName}`,
          `${score}`,
          `${gameDate}`,
          `${gameTime} EST`]
        )
      })
      console.log(table.toString());
    }
    cli.action.stop()
    getTerpsGames()
  }
}

FootballCommand.description = `Get the game time and scores for your favorite NCAA DI football team`

FootballCommand.flags = {
  team: flags.string({char: 't', description: `Enter your NCAAF team's name in quotations, e.g. "Maryland Terrapins"`}),
}

module.exports = FootballCommand
