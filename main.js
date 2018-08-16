import CardController from "./app/components/duelController.js";

class App {
  constructor() {
    this.controller = {
      cController: new CardController
    }
  }
}

window.app = new App