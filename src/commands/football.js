const {Command, flags} = require('@oclif/command')
const getGames = require('../fetchers/football')
const chalk = require('chalk')

class FootballCommand extends Command {

  async run() {
    const games = await getGames()
    const {flags} = this.parse(FootballCommand)
    const team = flags.team || 'Maryland Terrapins'
    function getTerpsGames(){
      let newArray = games.filter(x => x.HomeTeamName === team || x.AwayTeamName === team)
      let game = newArray.map((x,i) => {
        let gameDate =  new Date(newArray[i].DateTime)
        let gameTime = gameDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})
        gameDate = gameDate.toDateString()
        if(x.HomeTeamName === team){
          console.log(chalk.white.bgRed.bold(`${team} host ${x.AwayTeamName} on ${gameDate} at ${gameTime} EST`))
        } else {
           console.log(chalk.yellow.bgBlack.bold(`${team} visits ${x.HomeTeamName} on ${gameDate} at ${gameTime} EST`))
        }
      })
    }
    getTerpsGames()
  }
}

FootballCommand.description = `Describe the command here
...
Extra documentation goes here
`

FootballCommand.flags = {
  team: flags.string({char: 't', description: 'team to print'}),
}

module.exports = FootballCommand
