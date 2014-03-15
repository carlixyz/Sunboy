/**
 * Created by carlos on 10/03/14.
 */
var SunWorld = (function () {
    function SunWorld(game) {
        game.load.image('world', 'images/sunWorld.png');
        return this;
    }

    SunWorld.prototype.resetIt = function () {
        this.sprite.angle = 0;
        this.sprite.scaleX = 1;
        this.sprite.scaleY = 1;
    };

    SunWorld.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'world');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowGravity = false;
        this.sprite.body.immovable = true;
        this.sprite.body.setSize(100 , 200, 50, 405);



//        this.sprite.pivot.setTo(548, 548);
        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;

        this.sprite.reset(game.world.centerX-50, game.world.centerY + 25);

        this.GrowTween(game);



//        this.sprite.body.setSize(600 , 600, this.sprite.width - 300, this.sprite.height);


    };

    SunWorld.prototype.GrowTween = function (game) {
        this.sprite.scale.x  = 0.2;
        this.sprite.scale.y = 0.2;
//        this.sprite.alpha = 0;

        game.add.tween(this.sprite.scale).to({x:1, y:1}, 2000, Phaser.Easing.Elastic.Out, true, 100, false);
        game.add.tween(this.sprite).to({ alpha: 1, angle: 360 }, 4000, Phaser.Easing.Exponential.Out, true, 100, false).onComplete.add(
            function(){                        game.currentState = states.START;

            }
        );
        //x,y,alpha, angle, duration, easing, autostart?, delay, yoyo?

//        this.sprite = "#444444";


    };


    SunWorld.prototype.update = function (game) {
        game.physics.arcade.collide(player.sprite, world.sprite);

        this.sprite.angle -= 0.5;

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
//            this.sprite.body.velocity.x -= 10;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
//        {
//            this.sprite.body.velocity.x += 10;
//        }
    };

    SunWorld.prototype.render = function () {

        // Sprite debug info
//        game.debug.spriteInfo(this.sprite, 32, 32);
//        game.debug.rectangle(this.sprite);
        game.debug.body(this.sprite);
//        game.debug.geom()
//        game.debug.renderPhysicsBody(this.sprite.body);

//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunWorld;
})();
