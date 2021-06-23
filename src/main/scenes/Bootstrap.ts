import { MAIN_SCENEKEYS } from 'const'

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super(MAIN_SCENEKEYS.Bootstrap)
  }

  preload() {
    this.load.image('tictactoeMap', 'images/tictactoe-map.jpg')
  }

  create() {
    // console.log('create...', MAIN_SCENEKEYS.Bootstrap)
    this.scene.start(MAIN_SCENEKEYS.Game)
  }
}
