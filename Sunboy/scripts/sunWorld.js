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

//        this.sprite.body.translate(this.sprite.center.x-30, this.sprite.center.y-30);
//        this.sprite.body.setPolygon(0,0, 80,0, 80,60, 0,60 );
//        this.sprite.body.translate(this.sprite.center.x-40, 140);

        this.sprite.body.setSize(100, 500, 0, -150);
        this.sprite.body.allowGravity = false;
        this.sprite.body.immovable = true;


        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;

        this.GrowTween(game);


    };

    SunWorld.prototype.GrowTween = function (game) {
        this.sprite.scale.x  = 0.2;
        this.sprite.scale.y = 0.2;
//        this.sprite.alpha = 0;

        game.add.tween(this.sprite.scale).to({x:1, y:1}, 2000, Phaser.Easing.Elastic.Out, true, 100, false);
        game.add.tween(this.sprite).to({ alpha: 1, angle: 360 }, 4000, Phaser.Easing.Exponential.Out, true, 100, false).onCompleteCallback(
            function(){                        game.currentState = states.START;
            }
        );
        //x,y,alpha, angle, duration, easing, autostart?, delay, yoyo?


    };


    SunWorld.prototype.update = function (game) {

        this.sprite.angle -= 0.5;

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

    SunWorld.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
//        game.debug.renderPhysicsBody(this.sprite.body);

//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunWorld;
})();
