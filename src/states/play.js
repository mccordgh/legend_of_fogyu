import Phaser from 'phaser';

const msg = "Hello, World!";
const styleObject = {
  fontWeight: 'bold',
  backgroundColor: 'red',
  fill: 'yellow',
  fontSize: '48px',
};

let playerSprite;

class Play extends Phaser.State {
  create() {
    playerSprite = game.add.sprite(200, 200, 'fogyu');
  }

  update() {
    const text = game.add.text(100, 100, msg, styleObject);
  }

  render() {

  }
}

export default Play;
