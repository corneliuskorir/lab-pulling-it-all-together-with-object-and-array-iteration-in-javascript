function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

const playersObject = Object.assign(
  {},
  gameObject().home.players,
  gameObject().away.players,
);

function numPointsScored(playerName) {
  return playersObject[playerName].points;
}

function shoeSize(playerName) {
  return playersObject[playerName].shoe;
}

function teamColors(teamName) {
  if (gameObject().home.teamName === teamName) {
    return gameObject().home.colors;
  } else if (gameObject().away.teamName === teamName) {
    return gameObject().away.colors;
  } else {
    console.error("Team not included");
  }
}

function teamNames() {
  return Object.keys(gameObject()).map((e) => gameObject()[e].teamName);
}

function playerNumbers(teamName) {
  if (gameObject().home.teamName === teamName) {
    return Object.keys(gameObject().home.players).map(
      (e) => gameObject().home.players[e].number,
    );
  } else if (gameObject().away.teamName === teamName) {
    return Object.keys(gameObject().away.players).map(
      (e) => gameObject().away.players[e].number,
    );
  } else {
    console.error("Team not included");
  }
}

function playerStats(playerName) {
  if (!Object.keys(playersObject).includes(playerName)) {
    console.log("No player with that name");
    return;
  }
  return playersObject[playerName];
}

function bigShoeRebounds() {
  let largestShoe = Object.keys(playersObject).reduce((a, b) => {
    if (playersObject[b].shoe > a) {
      return playersObject[b].shoe;
    }
    return a;
  }, 0);

  let bigshoerebound;

  Object.keys(playersObject).forEach((ele) => {
    if (playersObject[ele].shoe === largestShoe) {
      bigshoerebound = playersObject[ele].rebounds;
    }
  });

  return bigshoerebound;
}
