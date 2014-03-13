/**
 *  PALMS TREE
 * Created by carlos on 10/03/14.
 */
var SunPalms = (function () {
    function SunPalms(game) {
        game.load.image('palms', 'images/sunPalms.png');
        return this;
    }

    SunPalms.prototype.resetIt = function () {
    };

    SunPalms.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'palms');

        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;
//        this.sprite.body.setSize(10, 20, 10, 8);
        this.sprite.body.setSize(5, 500, 0, -180);
        this.sprite.body.immovable = true;
    };

    SunPalms.prototype.update = function (game) {

        if ( this.sprite.angle < 3 && this.sprite.angle > -3)
            game.physics.collide(player.sprite, this.sprite );


    };

    SunPalms.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
    };

    return SunPalms;
})();
