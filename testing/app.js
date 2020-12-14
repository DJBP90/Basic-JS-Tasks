const team = {
    _players: [
      {
        firstName: "David", 
        lastName: "Breckon-Payne", 
        age: 30
      },
      {
        firstName: "John", 
        lastName: "Doe", 
        age: 25
      },
      {
        firstName: "Mike", 
        lastName: "Ross", 
        age: 22
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Bromley',
        teamPoints: 30,
        opponentPoints: 12
      },
      {
        opponent: 'Downham',
        teamPoints: 23,
        opponentPoints: 40
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(oppName, points, oppPoints){
      const game = {
        opponent: oppName,
        points: points,
        opponentPoints:oppPoints
      }
      this.games.push(game);
    }
  
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  
  //console.log(team.players);
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolves", 56, 90);
  team.addGame("Tigers", 30, 47);
  
  
  console.log(team.games);
  
  