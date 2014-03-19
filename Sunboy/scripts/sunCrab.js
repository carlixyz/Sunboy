/**
 * BEACH CRAB
 *
 * Created by carlos on 10/03/14.
 */
var SunCrab = (function () {
    function SunCrab(speed) {
//        game.load.spritesheet('crab', 'images/sunCrab.png', 32, 32, 16);
//        game.load.spritesheet('crab', 'images/sunCrab.png', 32, 1024, 4);
        this.angularSpeed = speed || .45;
        return this;
    }

    SunCrab.prototype.resetIt = function () {
        this.sprite.angle = 45 + Math.random() * 270;
        this.sprite.visible = true;
    };

    SunCrab.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'crab');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64, +25, 425);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;
        this.sprite.body.allowGravity = false;

        this.sprite.allowRotation = true;

        this.sprite.reset(game.world.centerX-25, game.world.centerY +5);

        this.sprite.animations.add('fly', [0, 1, 2, 3], 10, true);
        this.sprite.animations.play('fly');
        this.sprite.angle = rotation;


    };



    SunCrab.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 && player.sprite.body.embedded)
           hurtPlayer(game);
//                console.log("cangrejo overlapped") ;

//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= .35;



//            game.physics.arcade.overlap(player.sprite, this.sprite, function(){ console.log("cangrejo overlapped");});
//            game.physics.arcade.collide(player.sprite, this.sprite );

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
//        }
    };

    SunCrab.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunCrab;
})();
