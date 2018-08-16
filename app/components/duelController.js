import DuelService from "./duelService.js";

let dS = new DuelService

const champs = document.getElementById('champs')
const enemy = document.getElementById('enemy')

function drawChampions(champions) {
  let template = ""
  for (let i = 0; i < champions.length; i++) {
    const champion = champions[i];
    template += `
    <div class="card bg-secondary text-center my-5" onclick="app.controller.cController.selectChamp(${champion.id})">
      <div class="card-body">
        <h1 class="card-title">${champion.name}<h1>
        <h5 class="card-text">${champion.race} ${champion.class}</h5>
      </div>
      <img class="card-img-bottom px-4" src="${champion.imgUrl}" />
      <div class="card-img-overlay-bottom">
        <h1>HP: ${champion.hp}</h1>
      </div>
    </div>`
  }
  champs.innerHTML = template
}

function drawDragons(dragons) {
  let template = ""
  for (let i = 0; i < dragons.length; i++) {
    const dragon = dragons[i];
    template += `
    <div class="card bg-secondary text-center my-5" onclick="app.controller.cController.selectEnemy(${dragon.id})">
      <div class="card-body">
        <h1 class="card-title">${dragon.name}<h1>
      </div>
      <img class="card-img-bottom px-4" src="${dragon.imgUrl}" />
      <div class="card-img-overlay-bottom">
        <h2>HP: ${dragon.currentHP}</h2>
      </div>
    </div>
    `
  }
  enemy.innerHTML = template
}



let gameData = {
  dragonId: '',
  championId: ''
}


export default class CardController {
  constructor() {
    dS.getChampions(drawChampions)
    dS.getDragons(drawDragons)
  }

  newGame(gameData) {
    debugger
    dS.newGame(gameData)
    console.log(gameData)
  }

  selectChamp(id) {
    gameData.championId = id
    console.log(id)
  }

  selectEnemy(id) {
    gameData.dragonId = id
    console.log(id)
  }

}