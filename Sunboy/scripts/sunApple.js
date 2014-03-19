/**
 * Created by carlos on 17/03/14.
 */
/**
 * BEACH Apple (no way)
 *
 * Created by carlos on 10/03/14.
 */
var SunApple = (function () {
    function SunApple(speed) {
//        game.load.image('apple', 'images/sunApple.png');
        this.angularSpeed = speed || .35;

        return this;
    }

    SunApple.prototype.resetIt = function () {
        this.sprite.angle = game.rnd.integerInRange(45, 270);

        this.sprite.visible = true;

    };

    SunApple.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'apple');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64, +25, 425);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX-25, game.world.centerY +5);



    };



    SunApple.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 && player.sprite.body.embedded && this.sprite.visible )
            takeItem(this);

//                console.log("taken Coc!") ;

//            game.physics.arcade.overlap(player.sprite, this.sprite, function(){ console.log("cangrejo overlapped");});
//            game.physics.arcade.collide(player.sprite, this.sprite );

//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= 0.35;


    };

    SunApple.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunApple;
})();
