/**
 *  CLOUDS
 * Created by carlos on 10/03/14.
 */
var SunCloud = (function () {
    function SunCloud(game) {
        game.load.image('cloud', 'images/sunCloud.png');
        return this;
    }

    SunCloud.prototype.resetIt = function () {
    };

    SunCloud.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'cloud');
//        this.sprite.body.setSize(5, 500, 0, -220);
//        this.sprite.anchor.setTo(0.5, 0.5);
//        this.sprite.angle = rotation;
//        this.sprite.body.immovable = true;

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(100, 200, 50, 480);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX-50, game.world.centerY - 55);

    };

    SunCloud.prototype.update = function (game) {
        if ( this.sprite.angle < 3 && this.sprite.angle > -5)
            game.physics.arcade.collide(player.sprite, this.sprite );


    };

    SunCloud.prototype.render = function () {
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
        // Sprite debug info
    };

    return SunCloud;
})();