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

    };

    SunPalms.prototype.update = function (game) {

    };

    SunPalms.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
    };

    return SunPalms;
})();
