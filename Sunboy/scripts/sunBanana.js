/**
 * BEACH Banana
 *
 * Created by carlos on 10/03/14.
 */
var SunBanana = (function () {
    function SunBanana(speed) {
//        game.load.image('banana', 'images/sunBanana.png');

        this.angularSpeed = speed || .25;

        return this;
    }

    SunBanana.prototype.resetIt = function () {
        this.sprite.angle = game.rnd.integerInRange(45, 270);

        this.sprite.visible = true;

    };

    SunBanana.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'sprites');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64,  0, +425);

        this.sprite.animations.add('banana', [2], 1, false);
        this.sprite.animations.play('banana', 1, false);

        this.sprite.anchor.setTo(0.5, 13.55);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;

//        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'banana');
//
//        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
//        this.sprite.body.setSize(64, 64, +25, 425);
//
//        this.sprite.anchor.setTo(0.5, 0.5);
//
//        this.sprite.body.allowHorizontalDrag = false;
//        this.sprite.body.immovable = true;
//
//        this.sprite.allowRotation = true;
//        this.sprite.angle = rotation;
////        this.sprite.reset(game.world.centerX-25, game.world.centerY +5);



    };



    SunBanana.prototype.update = function (game) {
//
//        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 && player.sprite.body.embedded && this.sprite.visible )
//            takeItem(this);

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 &&  game.physics.arcade.overlap(player.sprite, this.sprite) && this.sprite.visible )
            takeItem(this);
//                console.log("taken Coc!") ;

//            game.physics.arcade.overlap(player.sprite, this.sprite, function(){ console.log("cangrejo overlapped");});
//            game.physics.arcade.collide(player.sprite, this.sprite );


//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= 0.25;

    };

    SunBanana.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunBanana;
})();
