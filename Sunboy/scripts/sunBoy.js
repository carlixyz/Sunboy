/**
 * PLAYER
 *
 * Created by carlos on 10/03/14.
 */
var SunBoy = (function () {
    function SunBoy(game) {
        game.load.spritesheet('kid', 'images/sunKid.png', 32, 32, 4);
        this.flickering = false;

        return this;
    }

    SunBoy.prototype.resetIt = function () {
        player.sprite.reset(425,230) ;
        this.flickering = false;
        this.sprite.health = 3;
        this.sprite.body.allowGravity = true;

    };

    SunBoy.prototype.create = function (game, rotation) {

//        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY , 'kid');
        this.sprite = game.add.sprite(425, 200 , 'kid');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);


        this.sprite.body.setSize(15, 20, -10, -10);


        //  Here we add a new animation called 'walk'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        this.sprite.animations.add('run');
        this.sprite.animations.add('idle', [3], 5, false);
        this.sprite.animations.add('jump', [0], 1, false);

        //  And this starts the animation playing by using its key ("walk")
        //  30 is the frame rate (30fps)
        //  true means it will loop when it finishes
        this.sprite.animations.play('idle', 7, false);
//

        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.allowGravity = false;
        this.sprite.body.immovable = false;
        this.sprite.body.gravity.y = 300;

    };



    SunBoy.prototype.update = function (game) {

        if (this.sprite.body.touching.down)
        {
            this.sprite.animations.play('run', 7, true);

            if (game.input.mousePointer.isDown )
            {
                this.sprite.body.velocity.y = -170;
                this.sprite.body.bounce.setTo(0, 0.35);
                this.sprite.animations.play('jump', 1, true);
            }
        }


//        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
//        {
//            this.sprite.y -= 10;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
//        {
//            this.sprite.y += 10;
//        }
//
//        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
//        {
//            this.sprite.x -= 10;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
//        {
//            this.sprite.x += 10;
//        }
    };

    SunBoy.prototype.render = function () {

        // Sprite debug info
       // game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.rectangle(this.sprite.body);

//        game.debug.renderPhysicsBody(this.sprite.body);

//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunBoy;
})();
