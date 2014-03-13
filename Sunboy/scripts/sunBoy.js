/**
 * PLAYER
 *
 * Created by carlos on 10/03/14.
 */
var SunBoy = (function () {
    function SunBoy(game) {
        game.load.spritesheet('kid', 'images/sunKid.png', 32, 32, 4);

        return this;
    }

    SunBoy.prototype.resetIt = function () {
    };

    SunBoy.prototype.create = function (game, rotation) {

//        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY , 'kid');
        this.sprite = game.add.sprite(435, 100 , 'kid');
        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.setSize(10, 20, 10, 8);



//        this.sprite.body.setPolygon(0,0, 10,0, 10,20, 0,20 );
//        this.sprite.body.translate(this.sprite.center.x-5, this.sprite.center.y-10);


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
        this.sprite.body.allowGravity = true;
        this.sprite.body.immovable = false;
        this.sprite.body.gravity.y = 12;

    };



    SunBoy.prototype.update = function (game) {


////        if (game.input.mousePointer.isDown || game.input.keyboard.justPressed(Phaser.Keyboard.SPACEBAR) )
////            this.velY = -1.5;
//
//      game.input.onDown.add(function(evt)
////        game.input.onTap.addOnce(function(evt)
//        {
//            player.velY = -1.5;
//        });
//
//        this.sprite.y += this.velY;
//        this.velY += 0.05;
//
//        if (this.sprite.y > 250)
//            this.velY = 0;

//        player.body.gravity.y = 50;

//        if (game.input.mousePointer.isDown && this.sprite.body.touching.down){
//        if (game.input.mousePointer.isDown && this.sprite.body.onFloor()){


        if (this.sprite.body.touching.down)
        {
            this.sprite.animations.play('run', 7, true);

            if (game.input.mousePointer.isDown )
            {
                this.sprite.body.velocity.y = -250;
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
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
//        game.debug.renderPhysicsBody(this.sprite.body);

//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunBoy;
})();
