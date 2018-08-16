import Champion from "../models/Champion.js";
import Dragon from "../models/dragon.js";
import Game from "../models/Game.js"

const championApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions',
  timeout: 3000
})

const dragonApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons',
  timeout: 3000
})

const gameApi = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/games',
  timeout: 3000
})

let newGame = {}
let gameId = ''

export default class DuelService {
  constructor() {
  }

  getChampions(callBack) {
    championApi.get()
      .then(res => {
        let champion = res.data.map(rC => {
          return new Champion(rC)
        })
        console.log(champion)
        callBack(champion)
      })
  }

  getDragons(callBack) {
    dragonApi.get()
      .then(res => {
        let dragon = res.data.map(rD => {
          return new Dragon(rD)
        })
        console.log(dragon)
        callBack(dragon)
      })
  }

  selectChamp(id) {
    newGame.championId = id
    console.log(newGame)
  }

  selectEnemy(id) {
    newGame.dragonId = id
    console.log(newGame)
  }

  start(drawGame) {
    gameApi.post('', newGame)
      .then(res => {
        let game = new Game(res.data.game)
        gameId = game._id
        drawGame(game)
        console.log(game)
      })
  }


}