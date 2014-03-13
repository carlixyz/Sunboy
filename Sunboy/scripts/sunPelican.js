/**
 *  PPELICAN
 * Created by carlos on 10/03/14.
 */
var SunPelican = (function () {
    function SunPelican(game) {
//        game.load.spritesheet('bird', 'images/sunPelican.png', 32, 32, 16);
        game.load.spritesheet('bird', 'images/sunPelican.png', 32, 1024, 4);

        return this;
    }

    SunPelican.prototype.resetIt = function () {
    };

    SunPelican.prototype.create = function (game, rotation) {

        this.sprite = game.add.sprite(game.world.centerX, game.world.centerY + 430 , 'bird');

//        this.sprite.anchor.setTo(0.5, 16);
//        this.sprite.angle = rotation;
//        this.sprite.body.setSize(32, 32, 0, 16);
//        this.sprite.body.immovable = true;
//
//        this.sprite.animations.add('fly', [4, 5, 6, 7], 20, true);
//        this.sprite.animations.play('fly');



        this.sprite.anchor.setTo(0.5, 0.5);
        this.sprite.angle = rotation;
        this.sprite.body.setSize(32, 32,  0, -450);
        this.sprite.body.immovable = true;

        this.sprite.animations.add('fly', [0, 1, 2, 3], 20, true);
        this.sprite.animations.play('fly');

//        console.log("pelican size: " + this.sprite.body.height);

    };

    SunPelican.prototype.update = function (game) {

        if ( this.sprite.angle < 1 && this.sprite.angle > -3.5)
            game.physics.collide(player.sprite, this.sprite );

//            game.physics.overlap(player.sprite, this.sprite, collisionHandler, null, this);


        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
        {
            this.sprite.y -= 5;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
        {
            this.sprite.y += 5;
        }

        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
        {
            this.sprite.angle -= 0.5;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
        {
            this.sprite.angle += 0.5;
        }
    };

    SunPelican.prototype.render = function () {

        // Sprite debug info
        game.debug.renderSpriteInfo(this.sprite, 32, 32);
    };

    return SunPelican;
})();
