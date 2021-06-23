import { MAIN_SCENEKEYS, TIC_TAC_TOE_SCENEKEYS } from 'const'
import { Grid, Align } from 'utils'

export class Game extends Phaser.Scene {
  constructor() {
    super(MAIN_SCENEKEYS.Game)
  }

  create() {
    const grid = new Grid({ scene: this, debug: false })
    const tictactoe = this.add.image(100, 200, 'tictactoeMap')
    tictactoe.setInteractive()
    tictactoe.on('pointerdown', () => {
      // tictactoe.setTint(0xff0000)
      this.scene.start(TIC_TAC_TOE_SCENEKEYS.Bootstrap)
    })
    Align.scaleTo(tictactoe, 0.2)
    grid.atIndex(tictactoe, 18)
  }
}
