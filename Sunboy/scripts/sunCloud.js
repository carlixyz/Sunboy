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

        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;

    };

    SunCloud.prototype.update = function (game) {

    };

    SunCloud.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
    };

    return SunCloud;
})();