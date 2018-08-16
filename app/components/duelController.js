import DuelService from "./duelService.js";

let dS = new DuelService

const champs = document.getElementById('champs')
const enemy = document.getElementById('enemy')
const battle = document.getElementById('battle')
const select = document.getElementById('select')

function drawChampions(champions) {
  let template = ''
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
  let template = ''
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

function drawGame(game) {
  select.style.display = "none"
  let template = `
  <div class="col">
      <h2>${game.champion.name}</h2>
      <h4>${game.champion.race} ${game.champion.class}</h4>
      <p>HP: ${game.champion.hp}</p>
      <img src="${game.champion.imgUrl}" alt="">
  </div>
  <div class="col">
  `
  for (let attack in game.champion.attacks) {
    template += `
          <button>${attack}</button>
      `
  }
  template += `
      <div class="game-dragon col">
          <h2>${game.dragon.name}</h2>
          <p>HP: ${game.dragon.currentHP}</p>
          <img src="${game.dragon.imgUrl}" alt="">
      </div>
  `
  battle.innerHTML = template
}

export default class CardController {
  constructor() {
    dS.getChampions(drawChampions)
    dS.getDragons(drawDragons)
  }


  selectChamp(id) {
    dS.selectChamp(id)
  }

  selectEnemy(id) {
    dS.selectEnemy(id)
  }

  start() {
    dS.start(drawGame)
  }
}