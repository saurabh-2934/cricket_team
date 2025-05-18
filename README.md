# Cricket Team

Given two files `app.js` and a database file `cricketTeam.db` consisting a table `cricket_team`.

Write APIs to perform operations on the table `cricket_team` containing the following columns,

| Columns       | Type    |
| ------------- | ------- |
| player_id     | INTEGER |
| player_name   | TEXT    |
| jersey_number | INTEGER |
| role          | TEXT    |

### API 1

#### Path: `/players/`

#### Method: `GET`

#### Description:

Returns a list of all players in the team

#### Response

```
[
  {
    playerId: 1,
    playerName: "Lakshman",
    jerseyNumber: 5,
    role: "All-rounder"
  },

  ...
]
```

### API 2

#### Path: `/players/`

#### Method: `POST`

#### Description:

Creates a new player in the team (database). `player_id` is auto-incremented

#### Request

```
{
  "playerName": "Vishal",
  "jerseyNumber": 17,
  "role": "Bowler"
}
```

#### Response

```
Player Added to Team
```

### API 3

#### Path: `/players/:playerId/`

#### Method: `GET`

#### Description:

Returns a player based on a player ID

#### Response

```
{
  playerId: 1,
  playerName: "Lakshman",
  jerseyNumber: 5,
  role: "All-rounder"
}
```

### API 4

#### Path: `/players/:playerId/`

#### Method: `PUT`

#### Description:

Updates the details of a player in the team (database) based on the player ID

#### Request

```
{
  "playerName": "Maneesh",
  "jerseyNumber": 54,
  "role": "All-rounder"
}
```

#### Response

```
Player Details Updated

```

### API 5

#### Path: `/players/:playerId/`

#### Method: `DELETE`

#### Description:

Deletes a player from the team (database) based on the player ID

#### Response

```
Player Removed
```

<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**


<!-- DB  -->

<!-- 
[
    {
        "player_id": 1,
        "player_name": "Maneesh",
        "jersey_number": 54,
        "role": "All-rounder"
    },
    {
        "player_id": 2,
        "player_name": "Trivi",
        "jersey_number": 3,
        "role": "All-rounder"
    },
    {
        "player_id": 3,
        "player_name": "Babu",
        "jersey_number": 18,
        "role": "Batsman"
    },
    {
        "player_id": 4,
        "player_name": "Venkat",
        "jersey_number": 19,
        "role": "Batsman"
    },
    {
        "player_id": 5,
        "player_name": "Vamsi",
        "jersey_number": 2,
        "role": "Batsman"
    },
    {
        "player_id": 6,
        "player_name": "Hari",
        "jersey_number": 22,
        "role": "Bowler"
    },
    {
        "player_id": 7,
        "player_name": "Harish",
        "jersey_number": 7,
        "role": "Batsman"
    },
    {
        "player_id": 8,
        "player_name": "Chanakya",
        "jersey_number": 1,
        "role": "Bowler"
    },
    {
        "player_id": 9,
        "player_name": "Vinod",
        "jersey_number": 8,
        "role": "Wicket-keeper"
    },
    {
        "player_id": 10,
        "player_name": "Gowtham",
        "jersey_number": 6,
        "role": "Bowler"
    },
    {
        "player_id": 11,
        "player_name": "Varshith",
        "jersey_number": 11,
        "role": "All-rounder"
    }
] -->