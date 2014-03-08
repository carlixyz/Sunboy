var Hero = (function () {
    function Hero(game) {
        this.facing = "right";
        this.hitDelay = 0;
        this.currentAnim = "idleLeft";
        this.jumping = false;
        this.stamina = 10000;
        this.life = 10000;
        game.loader.addSpriteSheet('hero', 'assets/ANIM_perso-FINALE.png', 54, 80);
        game.loader.addSpriteSheet('heroNight', 'assets/ANIM_ennemi-FINALE-nuit.png', 54, 80);
        game.loader.addAudioFile('jump', 'sound/jump.wav');
        game.loader.addAudioFile('hurt', 'sound/hurt.wav');
        game.loader.addAudioFile('apple', 'sound/apple.wav');
    }
    Hero.prototype.resetIt = function () {
        this.facing = "right";
        this.hitDelay = 0;
        this.currentAnim = "idleLeft";
        this.jumping = false;
        this.stamina = 10000;
        this.life = 10000;
    };

    Hero.prototype.create = function (game) {
        this.sprite = game.createSprite(373, 400, 'hero');
        this.sprite.animations.add('idleLeft', [27]);
        this.sprite.animations.add('idleRight', [28]);
        this.sprite.animations.add('runRight', [55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38], 30, true);
        this.sprite.animations.add('runLeft', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 30, true);
        this.sprite.animations.add('sleepLeft', [23, 24, 25, 26, 25, 24], 8, true);
        this.sprite.animations.add('sleepRight', [32, 31, 30, 29, 30, 31], 8, true);
        this.sprite.animations.add('jumpLeft', [18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 21, 22], 30, false);
        this.sprite.animations.add('jumpRight', [37, 37, 36, 36, 36, 36, 35, 35, 35, 35, 35, 35, 34, 33], 30, false);
        this.sprite.animations.add('landingLeft', [22], 30, false);
        this.sprite.animations.add('landingRight', [33], 30, false);
        this.sprite.animations.play('idleLeft');

        this.spriteNight = game.createSprite(373, 400, 'heroNight');
        this.spriteNight.animations.add('idleLeft', [27]);
        this.spriteNight.animations.add('idleRight', [28]);
        this.spriteNight.animations.add('runRight', [55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38], 30, true);
        this.spriteNight.animations.add('runLeft', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 30, true);
        this.spriteNight.animations.add('sleepLeft', [23, 24, 25, 26, 25, 24], 8, true);
        this.spriteNight.animations.add('sleepRight', [32, 31, 30, 29, 30, 31], 8, true);
        this.spriteNight.animations.add('jumpLeft', [18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 21, 22], 30, false);
        this.spriteNight.animations.add('jumpRight', [37, 37, 36, 36, 36, 36, 35, 35, 35, 35, 35, 35, 34, 33], 30, false);
        this.spriteNight.animations.add('landingLeft', [22], 30, false);
        this.spriteNight.animations.add('landingRight', [33], 30, false);
        this.spriteNight.animations.play('idleLeft');
    };

    Hero.prototype.update = function (game) {
        if (this.hitDelay > 0)
            this.hitDelay--;
        this.sprite.velocity.x = 0;
        this.sprite.velocity.y += 50;

        if (this.sprite.y > 350 && this.jumping == true) {
            this.sprite.y = 350;
            this.jumping = false;
            if (this.facing == 'left') {
                this.sprite.animations.play('landingLeft');
                this.currentAnim = 'landingLeft';
            } else {
                this.sprite.animations.play('landingRight');
                this.currentAnim = 'landingRight';
            }
        } else if (this.sprite.y > 350) {
            this.sprite.y = 350;
            this.jumping = false;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && !(this.currentAnim == "sleepLeft") && !(this.currentAnim == "sleepRight") && !(this.stamina == 0)) {
            if (this.jumping == false && this.facing == 'left') {
                game.sound.play('jump');
                this.sprite.velocity.y = -800;
                this.jumping = true;
                this.sprite.animations.play('jumpLeft');
                this.currentAnim = 'jumpLeft';
            } else if (this.jumping == false && this.facing == 'right') {
                game.sound.play('jump');
                this.sprite.velocity.y = -800;
                this.jumping = true;
                this.sprite.animations.play('jumpRight');
                this.currentAnim = 'jumpRight';
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.jumping == false) {
            if (this.stamina < 10000)
                this.stamina += 10;
            if (this.facing == 'left') {
                this.sprite.animations.play('sleepLeft');
                this.currentAnim = "sleepLeft";
            } else {
                this.sprite.animations.play('sleepRight');
                this.currentAnim = "sleepRight";
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.jumping == false) {
            this.facing = 'left';
            this.sprite.animations.play('runLeft');
            this.currentAnim = 'runLeft';
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.jumping == false) {
            this.facing = 'right';
            this.sprite.animations.play('runRight');
            this.currentAnim = 'runRight';
        } else if (this.jumping == false && this.currentAnim != 'landingRight' && this.currentAnim != 'landingLeft') {
            if (this.facing == 'left') {
                this.sprite.animations.play('idleLeft');
                this.currentAnim = 'idleLeft';
            } else {
                this.sprite.animations.play('idleRight');
                this.currentAnim = 'idleRight';
            }
        }

        this.spriteNight.velocity.x = 0;
        this.spriteNight.velocity.y += 50;

        if (this.spriteNight.y > 350 && this.jumping == true) {
            this.spriteNight.y = 350;
            this.jumping = false;
            if (this.facing == 'left') {
                this.spriteNight.animations.play('landingLeft');
                this.currentAnim = 'landingLeft';
            } else {
                this.spriteNight.animations.play('landingRight');
                this.currentAnim = 'landingRight';
            }
        } else if (this.spriteNight.y > 350) {
            this.spriteNight.y = 350;
            this.jumping = false;
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && !(this.currentAnim == "sleepLeft") && !(this.currentAnim == "sleepRight") && !(this.stamina == 0)) {
            if (this.jumping == false && this.facing == 'left') {
                game.sound.play('jump');
                this.spriteNight.velocity.y = -800;
                this.jumping = true;
                this.spriteNight.animations.play('jumpLeft');
                this.currentAnim = 'jumpLeft';
            } else if (this.jumping == false && this.facing == 'right') {
                game.sound.play('jump');
                this.spriteNight.velocity.y = -800;
                this.jumping = true;
                this.spriteNight.animations.play('jumpRight');
                this.currentAnim = 'jumpRight';
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && this.jumping == false) {
            if (this.stamina < 10000)
                this.stamina += 10;
            if (this.facing == 'left') {
                this.spriteNight.animations.play('sleepLeft');
                this.currentAnim = "sleepLeft";
            } else {
                this.spriteNight.animations.play('sleepRight');
                this.currentAnim = "sleepRight";
            }
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && this.jumping == false) {
            this.facing = 'left';
            this.spriteNight.animations.play('runLeft');
            this.currentAnim = 'runLeft';
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && this.jumping == false) {
            this.facing = 'right';
            this.spriteNight.animations.play('runRight');
            this.currentAnim = 'runRight';
        } else if (this.jumping == false && this.currentAnim != 'landingRight' && this.currentAnim != 'landingLeft') {
            if (this.facing == 'left') {
                this.spriteNight.animations.play('idleLeft');
                this.currentAnim = 'idleLeft';
            } else {
                this.spriteNight.animations.play('idleRight');
                this.currentAnim = 'idleRight';
            }
        }

        if (!(game.input.keyboard.isDown(Phaser.Keyboard.DOWN))) {
            if (this.stamina > 0)
                this.stamina -= 5;
        }
    };

    Hero.prototype.switchDay = function (day) {
        if (day) {
            this.spriteNight.alpha = 0;
            this.sprite.alpha = 1;
        } else {
            this.sprite.alpha = 0;
            this.spriteNight.alpha = 1;
        }
    };

    Hero.prototype.getSprite = function () {
        return this.sprite;
    };

    Hero.prototype.getStamina = function () {
        return Math.floor(this.stamina / 100);
    };

    Hero.prototype.getLife = function () {
        return Math.floor(this.life / 100);
    };

    Hero.prototype.getSleep = function () {
        var res = false;
        if (this.currentAnim == "sleepLeft" || this.currentAnim == "sleepRight")
            res = true;
        return res;
    };

    Hero.prototype.getY = function () {
        return this.sprite.y;
    };

    Hero.prototype.eatFruit = function (game) {
        game.sound.play('apple');
        if (this.life + 1500 < 10000)
            this.life += 1500;
else {
            this.life = 10000;
        }
    };

    Hero.prototype.hurt = function (game) {
        if (this.hitDelay == 0) {
            this.hitDelay = 10;
            game.sound.play('hurt');
            if (this.life - 2000 > 0)
                this.life -= 2000;
else
                this.life = 0;

            if (this.stamina - 1000 > 0)
                this.stamina -= 1000;
else
                this.stamina = 0;
        }
    };
    return Hero;
})();
