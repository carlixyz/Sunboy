/**
 *  PPELICAN
 * Created by carlos on 10/03/14.
 */
var SunPelican = (function () {
    function SunPelican(speed) {
//        game.load.spritesheet('bird', 'images/sunPelican.png', 32, 32, 16);
//        game.load.spritesheet('bird', 'images/sunPelican.png', 32, 1024, 4);
        this.angularSpeed = 0.35 || speed;

        return this;
    }

    SunPelican.prototype.resetIt = function () {
        this.sprite.angle = game.rnd.integerInRange(45, 270);

        this.sprite.visible = true;
    };

    SunPelican.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'sprites');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(16, 16,  -16, -230);

        this.sprite.animations.add('pelican', [12, 13, 14, 15], 10, true);
        this.sprite.animations.play('pelican', 10, true);

        this.sprite.anchor.setTo(0.5, 15);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;
        this.sprite.body.allowGravity = false;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;


//        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'bird');
//
//
//        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
////        this.sprite.body.setSize(32, 32, 0, -450);
//        this.sprite.body.setSize(16, 16, 0, 465);
//
//        this.sprite.anchor.setTo(0.5, 0.5);
//
//        this.sprite.body.allowHorizontalDrag = false;
//        this.sprite.body.immovable = true;
//        this.sprite.body.allowGravity = false;
//
//        this.sprite.allowRotation = true;
//        this.sprite.angle = rotation;
////        this.sprite.reset(game.world.centerX - 25, game.world.centerY - 25);
////        this.sprite.reset(game.world.centerX-50, -675);
//
////
//        this.sprite.animations.add('fly', [0, 1, 2, 3], 10, true);
//        this.sprite.animations.play('fly');


    };

    SunPelican.prototype.update = function (game) {

        if ( this.sprite.angle < 2.5 && this.sprite.angle > -1 && game.physics.arcade.overlap(player.sprite, this.sprite) )
            hurtPlayer(game);

            this.sprite.angle -= .3;


    };

    SunPelican.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunPelican;
})();
