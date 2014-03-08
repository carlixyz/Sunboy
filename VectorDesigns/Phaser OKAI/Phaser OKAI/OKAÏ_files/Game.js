/// <reference path='Hero.ts' />
/// <reference path='Monster.ts' />
/// <reference path='StaminaBar.ts' />
/// <reference path='LifeBar.ts' />
/// <reference path='Planet.ts' />
(function () {
    var myGame = new Phaser.Game(this, 'game', 800, 600, init, create, update);

    var planet;
    var hero;
    var lastStamp;
    var staminaBar;
    var lifeBar;
    var fruitId;
    var monsters;
    var shake;
    var dayCount;
    var day;
    var monsterAmount;
    var play;
    var start;
    var end;
    var titre;
    var gameover;
    var scoreUnite;
    var scoreDizaine;

    function init() {
        play = false;
        start = true;
        end = false;

        monsterAmount = 1;
        day = false;
        dayCount = 0;

        monsters = [100];

        for (var i = 0; i < 100; i++) {
            monsters[i] = null;
        }

        for (var i = 0; i < monsterAmount; i++) {
            monsters[i] = new Monster(myGame);
        }

        fruitId = 0;
        planet = new Planet(myGame);
        hero = new Hero(myGame);
        staminaBar = new StaminaBar(myGame);
        lifeBar = new LifeBar(myGame);

        myGame.loader.load();

        lastStamp = myGame.time.now / 1000;

        shake = myGame.camera.fx.add(Phaser.FX.Camera.Shake);

        myGame.loader.addImageFile('titre', 'assets/titre.png', 800, 600);
        myGame.loader.addImageFile('gameover', 'assets/gameover.png', 800, 600);
        myGame.loader.addSpriteSheet('number', 'assets/CHIFFRES.png', 22, 26);

        myGame.loader.addAudioFile('valid', 'sound/valid.wav');
        myGame.loader.addAudioFile('day', 'sound/day.wav');
        myGame.loader.addAudioFile('night', 'sound/night.wav');
    }

    function create() {
        planet.create(myGame);
        hero.create(myGame);
        for (var i = 0; i < monsterAmount; i++) {
            monsters[i].create(myGame, 180 + Math.floor(Math.random() * 180));
        }
        planet.createFront(myGame);
        staminaBar.create(myGame);
        lifeBar.create(myGame);

        titre = myGame.createSprite(0, 0, 'titre');
        gameover = myGame.createSprite(0, 0, 'gameover');

        scoreUnite = myGame.createSprite(485, 414, 'number');
        scoreDizaine = myGame.createSprite(455, 414, 'number');

        scoreUnite.animations.add('0', [0], 1, false);
        scoreUnite.animations.add('1', [1], 1, false);
        scoreUnite.animations.add('2', [2], 1, false);
        scoreUnite.animations.add('3', [3], 1, false);
        scoreUnite.animations.add('4', [4], 1, false);
        scoreUnite.animations.add('5', [5], 1, false);
        scoreUnite.animations.add('6', [6], 1, false);
        scoreUnite.animations.add('7', [7], 1, false);
        scoreUnite.animations.add('8', [8], 1, false);
        scoreUnite.animations.add('9', [9], 1, false);

        scoreDizaine.animations.add('0', [0], 1, false);
        scoreDizaine.animations.add('1', [1], 1, false);
        scoreDizaine.animations.add('2', [2], 1, false);
        scoreDizaine.animations.add('3', [3], 1, false);
        scoreDizaine.animations.add('4', [4], 1, false);
        scoreDizaine.animations.add('5', [5], 1, false);
        scoreDizaine.animations.add('6', [6], 1, false);
        scoreDizaine.animations.add('7', [7], 1, false);
        scoreDizaine.animations.add('8', [8], 1, false);
        scoreDizaine.animations.add('9', [9], 1, false);

        scoreUnite.animations.play('0');
        scoreDizaine.animations.play('0');

        scoreUnite.alpha = 0;
        scoreDizaine.alpha = 0;

        titre.alpha = 1;
        gameover.alpha = 0;
    }

    function update() {
        if (start) {
            if (myGame.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                myGame.sound.play('valid');
                start = false;
                play = true;
                titre.alpha = 0;
                myGame.sound.play('day');
            }
        } else if (end) {
            if (myGame.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
                myGame.sound.play('valid');
                end = false;
                play = true;
                gameover.alpha = 0;
                scoreUnite.alpha = 0;
                scoreDizaine.alpha = 0;
                resetGame();
            }
        } else if (play) {
            staminaBar.update(myGame, hero.getStamina());
            lifeBar.update(myGame, hero.getLife());
            hero.update(myGame);

            for (var i = 0; i < monsterAmount; i++) {
                monsters[i].update(myGame, hero.getSleep());
            }

            planet.update(myGame, hero.getSleep());

            if (myGame.time.now / 1000 - lastStamp > 10) {
                if (day)
                    console.log('day end');
else
                    console.log('night end');

                if (day) {
                    myGame.sound.play('night');
                    day = false;
                    raiseMonsterAmount();
                } else {
                    myGame.sound.play('day');
                    day = true;
                    dayCount++;
                }

                planet.switchDay();
                hero.switchDay(day);

                for (var i = 0; i < monsterAmount; i++) {
                    monsters[i].switchDay();
                }

                lastStamp = myGame.time.now / 1000;
            }

            if (myGame.time.now / 1000 - lastStamp > 9.5) {
                for (var i = 0; i < monsterAmount; i++) {
                    monsters[i].fade();
                }
            }

            for (var i = 0; i < monsterAmount; i++) {
                if (monsters[i].getMonsterRotation() != null)
                    if ((Math.abs(monsters[i].getMonsterRotation() % 360) < 2 || Math.abs(monsters[i].getMonsterRotation() % 360) > 358) && hero.getY() > 340 && hero.getY() < 380) {
                        heroHurt();
                    }
            }

            for (var i = 0; i < 3; i++) {
                fruitId = i;
                if (planet.getFruitsRotation()[i] != null)
                    if ((Math.abs(planet.getFruitsRotation()[i] % 360) < 2 || Math.abs(planet.getFruitsRotation()[i] % 360) > 358) && hero.getY() > 245 && hero.getY() < 255) {
                        heroGetFruit();
                    }
            }

            if (hero.getLife() <= 0) {
                play = false;
                end = true;
                gameover.alpha = 1;
                setScore();
                scoreUnite.alpha = 1;
                scoreDizaine.alpha = 1;
                for (var i = 0; i < monsterAmount; i++) {
                    monsters[i].endGame();
                }
                planet.freeze();
            }
        }
    }

    function heroGetFruit() {
        hero.eatFruit(myGame);
        planet.removeFruit(fruitId);
    }

    function heroHurt() {
        hero.hurt(myGame);
        shake.start(0.01);
    }

    function raiseMonsterAmount() {
        var amount = 1 + Math.floor(Math.random() * 3);
        for (var i = monsterAmount; i < monsterAmount + amount; i++) {
            monsters[i] = new Monster(myGame);
            monsters[i].create(myGame, 180 + Math.floor(Math.random() * 180));
            monsters[i].setDay(false);
        }

        monsterAmount += amount;

        for (var i = 0; i < monsterAmount; i++) {
            monsters[i].setRotation(180);
            console.log("Rotation monster " + i + " set");
            //monsters[i].setRotation(160+Math.floor(Math.random()*80));
        }
    }

    function resetGame() {
        hero.resetIt();
        planet.resetIt();
        monsterAmount = 1;
        for (var i = 0; i < monsterAmount; i++) {
            monsters[i].resetIt();
        }
        for (var i = monsterAmount; i < 100; i++) {
            monsters[i] = null;
        }

        day = true;
        dayCount = 1;

        planet.switchDay();
        hero.switchDay(day);

        for (var i = 0; i < monsterAmount; i++) {
            monsters[i].switchDay();
        }

        lastStamp = myGame.time.now / 1000;
    }

    function setScore() {
        if (dayCount % 10 == 0)
            scoreUnite.animations.play('0');
else if (dayCount % 10 == 1)
            scoreUnite.animations.play('1');
else if (dayCount % 10 == 2)
            scoreUnite.animations.play('2');
else if (dayCount % 10 == 3)
            scoreUnite.animations.play('3');
else if (dayCount % 10 == 4)
            scoreUnite.animations.play('4');
else if (dayCount % 10 == 5)
            scoreUnite.animations.play('5');
else if (dayCount % 10 == 6)
            scoreUnite.animations.play('6');
else if (dayCount % 10 == 7)
            scoreUnite.animations.play('7');
else if (dayCount % 10 == 8)
            scoreUnite.animations.play('8');
else if (dayCount % 10 == 9)
            scoreUnite.animations.play('9');

        if (Math.floor(dayCount / 10) == 0)
            scoreDizaine.animations.play('0');
else if (Math.floor(dayCount / 10) == 1)
            scoreDizaine.animations.play('1');
else if (Math.floor(dayCount / 10) == 2)
            scoreDizaine.animations.play('2');
else if (Math.floor(dayCount / 10) == 3)
            scoreDizaine.animations.play('3');
else if (Math.floor(dayCount / 10) == 4)
            scoreDizaine.animations.play('4');
else if (Math.floor(dayCount / 10) == 5)
            scoreDizaine.animations.play('5');
else if (Math.floor(dayCount / 10) == 6)
            scoreDizaine.animations.play('6');
else if (Math.floor(dayCount / 10) == 7)
            scoreDizaine.animations.play('7');
else if (Math.floor(dayCount / 10) == 8)
            scoreDizaine.animations.play('8');
else if (Math.floor(dayCount / 10) == 9)
            scoreDizaine.animations.play('9');
    }
})();
