const express = require('express')
const path = require('path')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const app = express()
app.use(express.json())

const dbPath = path.join(__dirname, 'cricketTeam.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Server Running at http://localhost:3000/')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}
initializeDBAndServer()

app.get('/players/', async (request, response) => {
  const cricektTeamInfo = `
   SELECT 
       player_id AS playerId,
       player_name AS playerName,
       jersey_number AS jerseyNumber,
       role AS role
     FROM 
       cricket_team
     ORDER BY
       player_id;`;
  const dbResponse = await db.all(cricektTeamInfo)
  response.send(dbResponse)
})

app.post('/players/', async (request, response) => {
  const player_details = await request.body
  const {playerName, jerseyNumber, role} = player_details

  const cricektTeamInfo = `
    INSERT INTO
    cricket_team (player_name,jersey_number,role)
    VALUES(
      '${playerName}',
      ${jerseyNumber},
      '${role}'
    );`
  await db.run(cricektTeamInfo)
  response.send('Player Added to Team')
})

app.get('/players/:playerId/', async (request, response) => {
  const {playerId} = request.params

  const cricektTeamInfo = `
    SELECT 
       player_id AS playerId,
       player_name AS playerName,
       jersey_number AS jerseyNumber,
       role AS role
     FROM 
       cricket_team
     WHERE 
       player_id = ${playerId};`;
  const player_details = await db.get(cricektTeamInfo)
  response.send(player_details)
})

app.put('/players/:playerId/', async (request, response) => {
  const {playerId} = request.params

  const player_details = request.body

  const {playerName, jerseyNumber, role} = player_details

  const cricektTeamInfo = `
    UPDATE 
      cricket_team
    SET 
      player_name = '${playerName}',
      jersey_number = ${jerseyNumber},
      role = '${role}'
    WHERE 
      player_id = ${playerId};`
  await db.run(cricektTeamInfo)
  response.send('Player Details Updated')
})

app.delete('/players/:playerId/', async (request, response) => {
  const {playerId} = request.params
  const deleted_player = `
  DELETE FROM
    cricket_team
  WHERE 
    player_id = ${playerId};`
  await db.run(deleted_player)
  response.send('Player Removed')
})

module.exports = app
