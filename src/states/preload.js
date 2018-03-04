import Phaser from 'phaser';

class Preload extends Phaser.State {
  create(){
    this.game.load.onLoadStart.add(this.loadStart, this);
    this.game.load.onFileComplete.add(this.fileComplete, this);
    this.game.load.onLoadComplete.add(this.loadComplete, this);

    this.loadingText = this.game.add.text(32, 32, 'Loading...', {
      fill: '#fff'
    });

    this.game.load.spritesheet('fogyu', 'assets/fogyu_1.png', 64, 64);

    this.game.load.start();
  }

  loadStart() {
    this.loadingText.setText('Loading...');
  }

  fileComplete(progress) {
    this.loadingText.setText('Loading: ' + progress + '%');
  }

  loadComplete() {
    this.loadingText.setText('Load Complete');
    this.game.state.start('play');
  }
}

export default Preload;
