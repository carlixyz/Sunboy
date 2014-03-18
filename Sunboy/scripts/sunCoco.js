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
    };

    SunCoco.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'coco');

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.setSize(64, 64, +25, 425);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX-25, game.world.centerY +5);



    };



    SunCoco.prototype.update = function (game) {

        if ( this.sprite.angle < 0 && this.sprite.angle > -4.5 && player.sprite.body.embedded)
            takeItem("coco");
//                console.log("taken Coc!") ;

//            game.physics.arcade.overlap(player.sprite, this.sprite, function(){ console.log("cangrejo overlapped");});
//            game.physics.arcade.collide(player.sprite, this.sprite );

        this.sprite.angle -= this.angularSpeed;

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

    SunCoco.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunCoco;
})();
