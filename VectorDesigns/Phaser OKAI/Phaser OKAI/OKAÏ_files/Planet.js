/// <reference path='Tree.ts' />
var Planet = (function () {
    function Planet(game) {
        this.day = true;
        this.trees = [];
        game.loader.addImageFile('moon', 'assets/DECORS_nuit/LD48_NUIT-lune.png');
        game.loader.addImageFile('sun', 'assets/DECORS_jours/LD48_JOUR-Soleil.png');

        game.loader.addImageFile('planetDay', 'assets/DECORS_jours/LD48_JOUR-terre-base.png');
        game.loader.addImageFile('frontRocks', 'assets/DECORS_jours/LD48_JOUR-premier-plan.png');
        game.loader.addImageFile('middleRocks', 'assets/DECORS_jours/LD48_JOUR-cailloux.png');
        game.loader.addImageFile('backRocks', 'assets/DECORS_jours/LD48_JOUR-rochers-ar.png');
        game.loader.addImageFile('clouds', 'assets/DECORS_jours/LD48_JOUR-nuages.png');
        game.loader.addImageFile('backgroundSky', 'assets/DECORS_jours/LD48_JOUR-fond.jpg');

        game.loader.addImageFile('planetSpriteNight', 'assets/DECORS_nuit/LD48_NUIT-terre-base.png');
        game.loader.addImageFile('frontRocksNight', 'assets/DECORS_nuit/LD48_NUIT-premier-plan.png');
        game.loader.addImageFile('middleRocksNight', 'assets/DECORS_nuit/LD48_NUIT-cailloux.png');
        game.loader.addImageFile('backRocksNight', 'assets/DECORS_nuit/LD48_NUIT-cailloux-ar.png');
        game.loader.addImageFile('cloudsNight', 'assets/DECORS_nuit/LD48_NUIT-nuages.png');
        game.loader.addImageFile('backgroundSkyNight', 'assets/DECORS_nuit/LD48_NUIT-fond.png');

        for (var i = 0; i < 3; i++) {
            this.trees[i] = new Tree(game);
        }
    }
    Planet.prototype.freeze = function () {
        this.planetSprite.angularVelocity = 0;
        this.frontRocks.angularVelocity = 0;
        this.middleRocks.angularVelocity = 0;
        this.backRocks.angularVelocity = 0;
        this.clouds.angularVelocity = 0;

        this.planetSpriteNight.angularVelocity = 0;
        this.frontRocksNight.angularVelocity = 0;
        this.middleRocksNight.angularVelocity = 0;
        this.backRocksNight.angularVelocity = 0;
        this.cloudsNight.angularVelocity = 0;

        for (var i = 0; i < 3; i++) {
            this.trees[i].freeze();
        }
    };

    Planet.prototype.resetIt = function () {
        this.day = true;
        for (var i = 0; i < 3; i++) {
            this.trees[i].resetIt();
        }
        this.planetSpriteNight.alpha = 0;
        this.backRocksNight.alpha = 0;
        this.cloudsNight.alpha = 0;
        this.backgroundSkyNight.alpha = 0;
    };

    Planet.prototype.create = function (game) {
        this.backgroundSky = game.createSprite(0, 0, 'backgroundSky');
        this.backgroundSkyNight = game.createSprite(0, 0, 'backgroundSkyNight');
        this.sunSprite = game.createSprite(278, 40, 'sun');
        this.moonSprite = game.createSprite(278, 40, 'moon');
        this.clouds = game.createSprite(-350, 150, 'clouds');
        this.cloudsNight = game.createSprite(-350, 150, 'cloudsNight');
        this.backRocks = game.createSprite(-350, 150, 'backRocks');
        this.backRocksNight = game.createSprite(-350, 150, 'backRocksNight');
        this.planetSprite = game.createSprite(-350, 150, 'planetDay');
        this.planetSpriteNight = game.createSprite(-350, 150, 'planetSpriteNight');

        this.tweenerMoon = game.createTween(this.moonSprite);
        this.tweenerSun = game.createTween(this.sunSprite);

        this.planetSpriteNight.alpha = 0;
        this.backRocksNight.alpha = 0;
        this.cloudsNight.alpha = 0;
        this.backgroundSkyNight.alpha = 0;

        this.trees[0].create(game, Math.floor(Math.random() * 120));
        this.trees[1].create(game, 120 + Math.floor(Math.random() * 120));
        this.trees[2].create(game, 240 + Math.floor(Math.random() * 120));
    };

    Planet.prototype.createFront = function (game) {
        this.middleRocks = game.createSprite(-350, 150, 'middleRocks');
        this.middleRocksNight = game.createSprite(-350, 150, 'middleRocksNight');
        this.frontRocks = game.createSprite(-350, 150, 'frontRocks');
        this.frontRocksNight = game.createSprite(-350, 150, 'frontRocksNight');

        this.frontRocksNight.alpha = 0;
        this.middleRocksNight.alpha = 0;
    };

    Planet.prototype.update = function (game, sleeping) {
        this.planetSprite.angularVelocity = 0;
        this.frontRocks.angularVelocity = 0;
        this.middleRocks.angularVelocity = 0;
        this.backRocks.angularVelocity = 0;
        this.clouds.angularVelocity = 0;

        this.planetSpriteNight.angularVelocity = 0;
        this.frontRocksNight.angularVelocity = 0;
        this.middleRocksNight.angularVelocity = 0;
        this.backRocksNight.angularVelocity = 0;
        this.cloudsNight.angularVelocity = 0;

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !sleeping) {
            this.clouds.angularVelocity = 10;
            this.backRocks.angularVelocity = 30;
            this.planetSprite.angularVelocity = 50;
            this.middleRocks.angularVelocity = 50;
            this.frontRocks.angularVelocity = 60;

            this.cloudsNight.angularVelocity = 10;
            this.backRocksNight.angularVelocity = 30;
            this.planetSpriteNight.angularVelocity = 50;
            this.middleRocksNight.angularVelocity = 50;
            this.frontRocksNight.angularVelocity = 60;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !sleeping) {
            this.clouds.angularVelocity = -30;
            this.backRocks.angularVelocity = -40;
            this.planetSprite.angularVelocity = -50;
            this.middleRocks.angularVelocity = -50;
            this.frontRocks.angularVelocity = -60;

            this.cloudsNight.angularVelocity = -30;
            this.backRocksNight.angularVelocity = -40;
            this.planetSpriteNight.angularVelocity = -50;
            this.middleRocksNight.angularVelocity = -50;
            this.frontRocksNight.angularVelocity = -60;
        }
        for (var i = 0; i < 3; i++) {
            this.trees[i].update(game, sleeping);
        }
    };

    Planet.prototype.switchDay = function () {
        for (var i = 0; i < 3; i++) {
            this.trees[i].switchDay(this.day);
        }

        if (this.day) {
            this.tweenerSun.to({ y: 40 }, 1000, Phaser.Easing.Bounce.Out);
            this.tweenerMoon.to({ y: 500 }, 1000, Phaser.Easing.Exponential.Out);
            this.tweenerSun.start();
            this.tweenerMoon.start();

            this.cloudsNight.alpha = 0;
            this.backRocksNight.alpha = 0;
            this.planetSpriteNight.alpha = 0;
            this.middleRocksNight.alpha = 0;
            this.frontRocksNight.alpha = 0;
            this.backgroundSkyNight.alpha = 0;

            this.clouds.alpha = 1;
            this.backRocks.alpha = 1;
            this.planetSprite.alpha = 1;
            this.middleRocks.alpha = 1;
            this.frontRocks.alpha = 1;
            this.backgroundSky.alpha = 1;

            this.day = false;
        } else {
            this.tweenerSun.to({ y: 500 }, 1000, Phaser.Easing.Exponential.Out);
            this.tweenerMoon.to({ y: 40 }, 1000, Phaser.Easing.Bounce.Out);
            this.tweenerSun.start();
            this.tweenerMoon.start();

            this.cloudsNight.alpha = 1;
            this.backRocksNight.alpha = 1;
            this.planetSpriteNight.alpha = 1;
            this.middleRocksNight.alpha = 1;
            this.frontRocksNight.alpha = 1;
            this.backgroundSkyNight.alpha = 1;

            this.clouds.alpha = 0;
            this.backRocks.alpha = 0;
            this.planetSprite.alpha = 0;
            this.middleRocks.alpha = 0;
            this.frontRocks.alpha = 0;
            this.backgroundSky.alpha = 0;

            this.day = true;
        }
    };

    Planet.prototype.dayTransition = function () {
        if (this.day) {
            this.cloudsNight.alpha = 0;
            this.backRocksNight.alpha = 0;
            this.planetSpriteNight.alpha = 0;
            this.middleRocksNight.alpha = 0;
            this.frontRocksNight.alpha = 0;
            this.backgroundSkyNight.alpha = 0;

            this.clouds.alpha = 1;
            this.backRocks.alpha = 1;
            this.planetSprite.alpha = 1;
            this.middleRocks.alpha = 1;
            this.frontRocks.alpha = 1;
            this.backgroundSky.alpha = 1;
        } else {
            this.cloudsNight.alpha = 1;
            this.backRocksNight.alpha = 1;
            this.planetSpriteNight.alpha = 1;
            this.middleRocksNight.alpha = 1;
            this.frontRocksNight.alpha = 1;
            this.backgroundSkyNight.alpha = 1;

            this.clouds.alpha = 0;
            this.backRocks.alpha = 0;
            this.planetSprite.alpha = 0;
            this.middleRocks.alpha = 0;
            this.frontRocks.alpha = 0;
            this.backgroundSky.alpha = 0;

            this.day = true;
        }
    };

    Planet.prototype.getSprite = function () {
        return this.planetSprite;
    };

    Planet.prototype.getFruitsRotation = function () {
        var tabFruits = [];
        tabFruits[0] = this.trees[0].getFruitRotation();
        tabFruits[1] = this.trees[1].getFruitRotation();
        tabFruits[2] = this.trees[2].getFruitRotation();

        return tabFruits;
    };

    Planet.prototype.removeFruit = function (fruitId) {
        this.trees[fruitId].removeFruit();
    };

    Planet.prototype.endGame = function () {
        this.cloudsNight.angularVelocity = 0;
        this.backRocksNight.angularVelocity = 0;
        this.planetSpriteNight.angularVelocity = 0;
        this.middleRocksNight.angularVelocity = 0;
        this.frontRocksNight.angularVelocity = 0;
        this.backgroundSkyNight.angularVelocity = 0;

        this.clouds.angularVelocity = 0;
        this.backRocks.angularVelocity = 0;
        this.planetSprite.angularVelocity = 0;
        this.middleRocks.angularVelocity = 0;
        this.frontRocks.angularVelocity = 0;
        this.backgroundSky.angularVelocity = 0;
    };
    return Planet;
})();
