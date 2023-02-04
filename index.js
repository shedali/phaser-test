// Import stylesheets
import './style.css';

var config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 400,
    height: 240,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.text(0,0,'hello')

    this.tweens.add({
        targets: logo,
        y: 230,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}