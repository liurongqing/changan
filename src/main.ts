import 'phaser'

import * as ticTacToeScenes from './modules/tic-tac-toe/scenes'
const scene = [ticTacToeScenes].map((v) => Object.values(v)).flat()
console.log(scene);


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: globalThis.innerWidth,
  height: globalThis.innerHeight,
  scene
}
export default new Phaser.Game(config)
