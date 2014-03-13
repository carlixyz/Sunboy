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
        this.sprite.body.setSize(5, 500, 0, -225);
        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;
        this.sprite.body.immovable = true;

    };

    SunCloud.prototype.update = function (game) {
        if ( this.sprite.angle < 3 && this.sprite.angle > -5)
            game.physics.collide(player.sprite, this.sprite );

        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
        {
            this.sprite.y -= 10;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
        {
            this.sprite.y += 10;
        }

        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
        {
            this.sprite.angle -= 0.1;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
        {
            this.sprite.angle += 0.1;
        }
    };

    SunCloud.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
    };

    return SunCloud;
})();