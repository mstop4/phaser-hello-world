var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);

function preload () {
  this.load.image('sky', 'img/sky.png');
  this.load.image('ground', 'img/platform.png');
  this.load.image('star', 'img/star.png');
  this.load.image('bomb', 'img/bomb.png');
  this.load.spritesheet('dude', 'img/dude.png',
                        { frameWidth: 32, frameHeight: 48 }
  );
}

function create () {

  // Background
  this.add.image(400, 300, 'sky');
  this.add.image(400, 300, 'star');

  // Platforms
  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  // Player
  player = this.physics.add.sprite(100, 450, 'dude');

  player.setBounce(0.2);
  player.setCollideWorldBounds(true);

  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1
  });

  this.anims.create({
    key: 'turn',
    frames: [ { key: 'dude', frame: 4 } ],
    frameRate: 20,
  });

  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1
  });
}

function update () {
}