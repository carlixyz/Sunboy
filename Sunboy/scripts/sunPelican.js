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


        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
//        this.sprite.body.setSize(32, 32, 0, -450);
        this.sprite.body.setSize(16, 16, 0, 465);

        this.sprite.anchor.setTo(0.5, 0.5);

        this.sprite.body.allowHorizontalDrag = false;
        this.sprite.body.immovable = true;

        this.sprite.allowRotation = true;
        this.sprite.angle = rotation;
        this.sprite.reset(game.world.centerX - 25, game.world.centerY - 25);
//        this.sprite.reset(game.world.centerX-50, -675);

//
        this.sprite.animations.add('fly', [0, 1, 2, 3], 10, true);
        this.sprite.animations.play('fly');


    };

    SunPelican.prototype.update = function (game) {

        if ( this.sprite.angle < 3.5 && this.sprite.angle > -1 && player.sprite.body.embedded)
            hurtPlayer(game);


//            game.physics.arcade.collide(player.sprite, this.sprite );

//            game.physics.overlap(player.sprite, this.sprite, collisionHandler, null, this);

        if ( game.input.keyboard.isDown(Phaser.Keyboard.W) )
        {
            this.sprite.body.velocity.y -= 10;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.S) )
        {
            this.sprite.body.velocity.y += 10;
        }

        if ( game.input.keyboard.isDown(Phaser.Keyboard.A) )
        {
//            this.sprite.body.velocity.x -= 10;
            this.sprite.angle += 0.5;
        }
        else if ( game.input.keyboard.isDown(Phaser.Keyboard.D) )
        {
//            this.sprite.body.velocity.x += 10;
            this.sprite.angle -= 0.5;

        }
    };

    SunPelican.prototype.render = function () {

        // Sprite debug info
        game.debug.spriteInfo(this.sprite, 32, 32);
        game.debug.body(this.sprite);
    };

    return SunPelican;
})();
