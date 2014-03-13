/**
 * BEACH CRAB
 *
 * Created by carlos on 10/03/14.
 */
var SunCrab = (function () {
    function SunCrab(game) {
//        game.load.spritesheet('crab', 'images/sunCrab.png', 32, 32, 16);
        game.load.spritesheet('crab', 'images/sunCrab.png', 32, 1024, 4);

        return this;
    }

    SunCrab.prototype.resetIt = function () {
    };

    SunCrab.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'crab');

//        this.sprite.anchor.setTo(0.5, 16);
//        this.sprite.angle = rotation;
//        this.sprite.body.setSize(32, 32, 0, 16);
//        this.sprite.body.immovable = true;
//
//        this.sprite.animations.add('fly', [4, 5, 6, 7], 20, true);
//        this.sprite.animations.play('fly');



        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;
        this.sprite.body.setSize(32, 32,  0, -400);
        this.sprite.body.immovable = true;

        this.sprite.animations.add('move', [0, 1, 2, 3], 20, true);
        this.sprite.animations.play('move');

//        console.log("crab size: " + this.sprite.body.height);

    };



    SunCrab.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -3.5)
            game.physics.collide(player.sprite, this.sprite );
//            game.physics.overlap(player.sprite, this.sprite, collisionHandler, null, this);

        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
        {
            this.sprite.y -= 10;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
        {
            this.sprite.y += 10;
        }

        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
        {
            this.sprite.angle -= 0.25;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
        {
            this.sprite.angle += 0.25;
        }
    };

    SunCrab.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
//        game.debug.renderPhysicsBody(this.sprite.body);

//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunCrab;
})();
