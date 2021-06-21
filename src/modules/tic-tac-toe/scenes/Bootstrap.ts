import { TIC_TAC_TOE_SCENEKEYS } from 'const'

export class Bootstrap extends Phaser.Scene {
  constructor() {
    super(TIC_TAC_TOE_SCENEKEYS.Bootstrap)
  }

  init() {
    console.log('init...')
  }

  create() {
    console.log('create...')
    this.scene.start('tic-tac-toe-game')
  }
}
