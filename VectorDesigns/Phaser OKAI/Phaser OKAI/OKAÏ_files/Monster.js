var Monster = (function () {
    function Monster(game) {
        this.speed = 0;
        this.day = true;
        this.fading = false;
        game.loader.addSpriteSheet('monster', 'assets/ANIM_ennemi-FINALE.png', 42, 1500);
    }
    Monster.prototype.resetIt = function () {
        this.speed = 0;
        this.day = true;
        this.fading = false;
    };

    Monster.prototype.create = function (game, rotation) {
        this.sprite = game.createSprite(379, 150, 'monster');
        this.sprite.animations.add('walk', [0, 1, 2, 3, 4], 14, true);
        this.sprite.animations.add('fadeLeft', [14, 15, 16, 17, 18], 10, false);
        this.sprite.animations.add('fadeRight', [32, 22, 21, 20, 19], 10, false);
        this.sprite.animations.add('walkLeft', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 30, true);
        this.sprite.animations.add('walkRight', [37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24], 30, true);
        this.sprite.animations.play('walk');
        this.sprite.rotation = rotation;
        this.speed = 40 - Math.floor(Math.random() * 80);
        if (this.speed > 0)
            this.sprite.animations.play('walkRight');
else
            this.sprite.animations.play('walkLeft');
        if (this.day)
            this.sprite.alpha = 0;
    };

    Monster.prototype.update = function (game, sleeping) {
        this.sprite.angularVelocity = this.speed;

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !sleeping) {
            this.sprite.angularVelocity = 50 + this.speed;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !sleeping) {
            this.sprite.angularVelocity = -50 + this.speed;
        }
    };

    Monster.prototype.switchDay = function () {
        this.fading = false;
        if (this.speed > 0)
            this.sprite.animations.play('walkRight');
else
            this.sprite.animations.play('walkLeft');

        if (this.day) {
            console.log('monsters switched to night');
            this.sprite.alpha = 0;
            this.day = false;
        } else {
            console.log('monsters switched to day');
            this.sprite.alpha = 1;
            this.day = true;
        }
    };

    Monster.prototype.getMonsterRotation = function () {
        var res = 0;
        if (this.sprite.alpha == 0)
            res = null;
else
            res = this.sprite.rotation;
        return res;
    };

    Monster.prototype.setRotation = function (amount) {
        this.sprite.rotation = amount;
    };

    Monster.prototype.setDay = function (val) {
        this.day = val;
    };

    Monster.prototype.fade = function () {
        if (!this.fading) {
            this.fading = true;
            if (this.speed > 0)
                this.sprite.animations.play('fadeRight');
else
                this.sprite.animations.play('fadeLeft');
        }
    };

    Monster.prototype.endGame = function () {
        this.sprite.angularVelocity = 0;
        this.sprite.alpha = 0;
    };
    return Monster;
})();
