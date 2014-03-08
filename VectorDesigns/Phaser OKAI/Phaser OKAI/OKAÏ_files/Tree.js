var Tree = (function () {
    function Tree(game) {
        game.loader.addImageFile('tree', 'assets/LD48_Abre-jour-BASE.png');
        game.loader.addSpriteSheet('shell', 'assets/LD48_COQUILLE-spriteshit.png', 61, 1500);
        game.loader.addImageFile('treeNight', 'assets/LD48_Abre-nuit-BASE.png');
        game.loader.addSpriteSheet('shellNight', 'assets/LD48_COQUILLE-spriteshit-NUIT.png', 61, 1500);
        game.loader.addImageFile('fruit', 'assets/LD48_FRUIT.png');
        this.fruitRepop = 0;
    }
    Tree.prototype.freeze = function () {
        this.tree.angularVelocity = 0;
        this.fruit.angularVelocity = 0;
        this.shell.angularVelocity = 0;

        this.treeNight.angularVelocity = 0;
        this.shellNight.angularVelocity = 0;
    };

    Tree.prototype.resetIt = function () {
        this.fruitRepop = 0;
    };

    Tree.prototype.create = function (game, rotation) {
        this.tree = game.createSprite(306, 150, 'tree');
        this.treeNight = game.createSprite(306, 150, 'treeNight');
        this.fruit = game.createSprite(388, 150, 'fruit');

        this.shell = game.createSprite(370, 150, 'shell');
        this.shell.animations.add('close', [0, 1, 2, 3, 4], 30, false);
        this.shell.animations.add('open', [4, 3, 2, 1, 0], 30, false);
        this.shell.animations.play('open');

        this.shellNight = game.createSprite(370, 150, 'shellNight');
        this.shellNight.animations.add('closeNight', [0, 1, 2, 3, 4], 30, false);
        this.shellNight.animations.add('openNight', [4, 3, 2, 1, 0], 30, false);
        this.shellNight.animations.play('openNight');

        this.tree.rotation = rotation;
        this.fruit.rotation = rotation + 7;
        this.shell.rotation = rotation + 7;

        this.treeNight.rotation = rotation;
        this.shellNight.rotation = rotation + 7;
    };

    Tree.prototype.update = function (game, sleeping) {
        if (this.fruit.alpha == 0 && this.fruitRepop > 0) {
            this.fruitRepop--;
        }

        this.tree.angularVelocity = 0;
        this.fruit.angularVelocity = 0;
        this.shell.angularVelocity = 0;

        this.treeNight.angularVelocity = 0;
        this.shellNight.angularVelocity = 0;

        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT) && !sleeping) {
            this.tree.angularVelocity = 50;
            this.fruit.angularVelocity = 50;
            this.shell.angularVelocity = 50;

            this.treeNight.angularVelocity = 50;
            this.shellNight.angularVelocity = 50;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) && !sleeping) {
            this.tree.angularVelocity = -50;
            this.fruit.angularVelocity = -50;
            this.shell.angularVelocity = -50;

            this.treeNight.angularVelocity = -50;
            this.shellNight.angularVelocity = -50;
        }
    };

    Tree.prototype.switchDay = function (day) {
        if (day) {
            if (this.fruit.alpha == 0 && this.fruitRepop == 0)
                this.fruit.alpha = 1;
            this.shell.animations.play('open');

            this.treeNight.alpha = 0;
            this.shellNight.alpha = 0;
            this.tree.alpha = 1;
            this.shell.alpha = 1;
        } else {
            this.fruit.alpha = 0;
            this.shellNight.animations.play('closeNight');

            this.tree.alpha = 0;
            this.shell.alpha = 0;
            this.treeNight.alpha = 1;
            this.shellNight.alpha = 1;
        }
    };

    Tree.prototype.getFruitRotation = function () {
        var res = 0;
        if (this.fruit.alpha == 0)
            res = null;
else
            res = this.fruit.rotation;
        return res;
    };

    Tree.prototype.removeFruit = function () {
        this.fruit.alpha = 0;
    };
    return Tree;
})();
