import 'phaser'
import { Align } from 'utils'
import * as mainScenes from './main/scenes'
import * as ticTacToeScenes from './modules/tic-tac-toe/scenes'

const scene = [mainScenes, ticTacToeScenes].map((v) => Object.values(v)).flat()
const { innerWidth: width, innerHeight: height } = globalThis
const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width,
  height,
  backgroundColor: 0x1890ff,
  parent: 'game',
  scene
}

/**
 * 初始化
 */
Align.width = width
export default new Phaser.Game(config)
