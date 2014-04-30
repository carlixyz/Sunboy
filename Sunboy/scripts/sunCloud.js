/**
 *  CLOUDS
 * Created by carlos on 10/03/14.
 */
var SunCloud = (function () {
    function SunCloud(speed) {
//        game.load.image('cloud', 'images/sunCloud.png');
        this.angularSpeed = speed  | 0.3;

        return this;
    }

    SunCloud.prototype.resetIt = function () {
        this.sprite.angle = game.rnd.integerInRange(45, 270);
        this.sprite.visible = true;
    };

    SunCloud.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'cloud');
//        this.sprite.body.setSize(5, 500, 0, -220);
//        this.sprite.anchor.setTo(0.5, 0.5);
//        this.sprite.angle = rotation;
//        this.sprite.body.immovable = true;

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64,  -16, +520);

        this.sprite.anchor.setTo(0.5, 15.5);
        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;
        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;

        if (Math.random() > .5)
            this.sprite.scale.x  = -1;
    };

    SunCloud.prototype.update = function (game) {
        if ( this.sprite.angle < 3 && this.sprite.angle > -5)
            game.physics.arcade.collide(player.sprite, this.sprite );

//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= 0.25;


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
//
//        }

    };

    SunCloud.prototype.render = function () {
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
        // Sprite debug info
    };

    return SunCloud;
})();