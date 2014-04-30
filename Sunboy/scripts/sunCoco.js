/**
 * Created by carlos on 17/03/14.
 */
/**
 * BEACH COCO
 *
 * Created by carlos on 10/03/14.
 */
var SunCoco = (function () {
    function SunCoco(speed) {
//        game.load.image('coco', 'images/sunCoco.png');
        this.angularSpeed = speed  | 0.3;

        return this;
    }

    SunCoco.prototype.resetIt = function () {
        this.sprite.angle = game.rnd.integerInRange(45, 270);

        this.sprite.visible = true;
    };

    SunCoco.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'sprites');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64,  0, +425);

        this.sprite.animations.add('coco', [3], 1, false);
        this.sprite.animations.play('coco', 1, false);

        this.sprite.anchor.setTo(0.5, 13.55);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;

    };



    SunCoco.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 &&  game.physics.arcade.overlap(player.sprite, this.sprite) && this.sprite.visible )
            takeItem(this);

//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= .3;

    };

    SunCoco.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunCoco;
})();
