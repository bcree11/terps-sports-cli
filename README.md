terps-sports
============

Check game time and scores of your NCAAF and NCAAB teams

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/terps-sports.svg)](https://npmjs.org/package/terps-sports)
[![Downloads/week](https://img.shields.io/npm/dw/terps-sports.svg)](https://npmjs.org/package/terps-sports)
[![License](https://img.shields.io/npm/l/terps-sports.svg)](https://github.com/bcree11/terps-sports-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g terps-sports
$ terps COMMAND
running command...
$ terps (-v|--version|version)
terps-sports/0.0.0 darwin-x64 node-v11.6.0
$ terps --help [COMMAND]
USAGE
  $ terps COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`terps football`](#terps-football)
* [`terps basketball`](#terps-basketball)
* [`terps help [COMMAND]`](#terps-help-command)

## `terps help [COMMAND]`

display help for terps

```
USAGE
  $ terps help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## `terps football`

Get the game time of your favorite NCAA DI football team

```
USAGE
  $ terps football
  The Default team is the Maryland Terrapins

OPTIONS
  -t, --team="team name"  Enter your NCAAF team's name in quotations, e.g. "Maryland Terrapins"

EXAMPLE

┌──────────────────────────┬────┬──────────────────────────┬─────────────┬─────────────────┬──────────────┐
│ Home Team                │ VS │ Away Team                │ Score (H-A) │ Date            │ Time         │
├──────────────────────────┼────┼──────────────────────────┼─────────────┼─────────────────┼──────────────┤
│ Maryland Terrapins       │ VS │ Howard Bison             │ Upcoming    │ Sat Aug 31 2019 │ 12:00 PM EST │
├──────────────────────────┼────┼──────────────────────────┼─────────────┼─────────────────┼──────────────┤
│ Maryland Terrapins       │ VS │ Syracuse Orange          │ Upcoming    │ Sat Sep 07 2019 │ 12:00 PM EST │
├──────────────────────────┼────┼──────────────────────────┼─────────────┼─────────────────┼──────────────┤
```

## `terps basketball`

Get the game time and scores for your favorite NCAA DI basketball team

```
USAGE
  $ terps basketball
  The Default team is the Maryland Terrapins

OPTIONS
  -t, --team=team Enter your NCAAB team's abbreviated name, e.g. MARY

EXAMPLE

┌───────────┬────┬───────────┬─────────────┬─────────────────┬──────────────┐
│ Home Team │ VS │ Away Team │ Score (H-A) │ Date            │ Time         │
├───────────┼────┼───────────┼─────────────┼─────────────────┼──────────────┤
│ MARY      │ VS │ DEL       │ 82-75       │ Tue Nov 06 2018 │ 7:30 PM EST  │
├───────────┼────┼───────────┼─────────────┼─────────────────┼──────────────┤
│ NAVY      │ VS │ MARY      │ 64-87       │ Fri Nov 09 2018 │ 8:46 PM EST  │
├───────────┼────┼───────────┼─────────────┼─────────────────┼──────────────┤
│ MARY      │ VS │ NCAT      │ 92-66       │ Mon Nov 12 2018 │ 7:00 PM EST  │
├───────────┼────┼───────────┼─────────────┼─────────────────┼──────────────┤
```
<!-- commandsstop -->
