/**
 * BEACH Health
 *
 * Created by carlos on 10/03/14.
 */

var SunHealth = (function () {
    function SunHealth(speed) {
//        game.load.image('health', 'images/sunHealth.png');
        this.angularSpeed = speed || .45;

        return this;
    }

    SunHealth.prototype.resetIt = function () {
        this.sprite.angle = 45 + Math.random() * 270;
        this.sprite.visible = true;

    };

    SunHealth.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'health');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64, +25, 425);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX-25, game.world.centerY +5);



    };



    SunHealth.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 && player.sprite.body.embedded && this.sprite.visible )
            takeItem(this);
//                console.log("taken Coc!") ;

//            game.physics.arcade.overlap(player.sprite, this.sprite, function(){ console.log("cangrejo overlapped");});
//            game.physics.arcade.collide(player.sprite, this.sprite );

//        this.sprite.angle -= this.angularSpeed;
        this.sprite.angle -= 0.45;

//        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
//        {
//            this.sprite.y -= 10;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
//        {
//            this.sprite.y += 10;
//        }
//
//        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
//        {
//            this.sprite.angle -= 0.25;
//        }
//        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
//        {
//            this.sprite.angle += 0.25;
//        }
    };

    SunHealth.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunHealth;
})();
