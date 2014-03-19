/**
 *  PALMS TREE
 * Created by carlos on 10/03/14.
 */
var SunPalms = (function () {
    function SunPalms(speed) {
//        game.load.image('palms', 'images/sunPalms.png');
        this.angularSpeed = speed || 0.25;
        return this;
    }

    SunPalms.prototype.resetIt = function () {
//        this.sprite.angle = 45 + Math.random() * 270;
        this.sprite.angle = game.rnd.integerInRange(45, 270);
        this.sprite.visible = true;

    };

    SunPalms.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'palms');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(100, 200, 50, 440);
        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX-50, game.world.centerY - 10);

        if (Math.random() > .5)
            this.sprite.scale.x  = -1;
    };

    SunPalms.prototype.update = function (game) {

        if ( this.sprite.angle < 3 && this.sprite.angle > -5)
            game.physics.arcade.collide(player.sprite, this.sprite );

        this.sprite.angle -= .2;
//        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
//        {
//            this.sprite.body.velocity.y -= 10;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
//        {
//            this.sprite.body.velocity.y += 10;
//        }
//
//        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
//        {
////            this.sprite.body.velocity.x -= 10;
//            this.sprite.angle += 0.5;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
//        {
////            this.sprite.body.velocity.x += 10;
//            this.sprite.angle -= 0.5;
//        }
    };

    SunPalms.prototype.render = function () {
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
        // Sprite debug info
    };

    return SunPalms;
})();
