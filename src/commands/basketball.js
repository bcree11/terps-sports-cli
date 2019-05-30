const {Command, flags} = require('@oclif/command')
const getGames = require('../fetchers/football')
const basketballApi = 'https://api.sportsdata.io/v3/cbb/scores/json/Games/2019?key=af12ed2484924831bceb0d35032bbac4'
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

class BasketballCommand extends Command {
  async run() {
    cli.action.start('Filtering game times')
    const games = await getGames(basketballApi)
    const {flags} = this.parse(BasketballCommand)
    const team = flags.team ? flags.team.toUpperCase() : 'MARY'
    function getTerpsGames(){
      let filterGames = games.filter(x => x.HomeTeam === team || x.AwayTeam === team)
      let game = filterGames.map((x,i) => {
        let gameDate =  new Date(filterGames[i].DateTime)
        let gameTime = gameDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
        gameDate = gameDate.toDateString()
        let score = x.HomeTeamScore ? `${x.HomeTeamScore}-${x.AwayTeamScore}` : 'Upcoming'
        table.push(
          [`${x.HomeTeam}`, 'VS', `${x.AwayTeam}`,
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

BasketballCommand.description = `Get the game time and scores for your favorite NCAA DI basketball team`

BasketballCommand.flags = {
  team: flags.string({char: 't', description: `Enter your NCAAB team's abbreviated name, e.g. MARY`}),
}

module.exports = BasketballCommand
