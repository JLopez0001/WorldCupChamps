# World Cup API

The World Cup API has the has the entire squad of every World Cup winning team.

![API](https://i.imgur.com/RqkmVwX.png)

## What's in here?

This API has the following information:
- winningNation: The team who won the tournament
- finalOpponent: The second place team
- captain: The Captain of the team
- manager: The Squad Manager
- worldCupYear: The year the tournament was played(or supposed to be played)
- score: final score of the game
- highestGoalScorer: Highest scorer from that tournament
- extraTime: Says whether it went into extra time
- penalties: Says whether it went to penalties
- players: The entire sqaud of the winning team

### Endpoints

```
api/teams
```
Get all World Cup Winning Teams

```
api/teams/:id
```
Get team by ID

## How to use

If you want to use this API follow these instructions:

- Fork and clone repository
```
npm i
```
- This is to install all necessary dependencies

```
node seed/data.js
```
- This will run the seed file and create a local database

```
node server.js
```
- This will run the server so you can see the information on the local host

```
http://localhost:3017/api/teams/
```
- This will show you all of the data available in the API

## Authors

[niles](https://github.com/nilestoomer)