/**
 * Created by carlos on 10/03/14.
 */
var SunHome = (function () {
    function SunHome(game) {
        game.load.image('home', 'images/sunHome.png');
        return this;
    }

    SunHome.prototype.resetIt = function () {
    };

    SunHome.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY +430, 'home');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;
        this.sprite.body.immovable = true;

        this.GrowTween(game);

    };

    SunHome.prototype.GrowTween = function (game) {
        this.sprite.scale.x  = 0.1;
        this.sprite.scale.y = 0.1;
//        this.sprite.angle = 360;
//        this.sprite.alpha = 0;

        game.add.tween(this.sprite.scale).to({x:1, y:1, alpha: 1, angle: 0}, 2000, Phaser.Easing.Elastic.Out, true, 90, false);
//        game.add.tween(this.sprite).to({ alpha: 1, angle: -360 }, 3000, Phaser.Easing.Exponential.Out, true, 100, false);
    };

    SunHome.prototype.update = function (game) {

        this.sprite.angle -= 0.1;

//        switch ( game.currentState )
//        {
//            case states.START:
//                break;
//            case states.INGAME:
//                break;
//            case states.BUCLE:
//                break;
//            case states.GAMEOVER:
//                break;
//            default:
//                break;
//
//        }
    };

    SunHome.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
//      game.debug.renderLocalTransformInfo(this.sprite, 32, 160);
//      game.debug.renderWorldTransformInfo(this.sprite, 32, 290);
    };

    return SunHome;
})();