var LifeBar = (function () {
    function LifeBar(game) {
        game.loader.addImageFile('lifeBar', 'assets/BARRE_rouge.png');
        game.loader.addImageFile('lifeBarBack', 'assets/BARRE_vide.png');
        this.spriteBar = [];
    }
    LifeBar.prototype.create = function (game) {
        this.spriteBarEmpty = game.createSprite(30, 30, 'lifeBarBack');
        for (var i = 0; i < 100; i++) {
            this.spriteBar[i] = game.createSprite(36 + i, 36, 'lifeBar');
        }
    };

    LifeBar.prototype.update = function (game, heroStamina) {
        for (var i = 0; i < heroStamina; i++) {
            this.spriteBar[i].alpha = 1;
        }
        for (var i = heroStamina; i < 100; i++) {
            this.spriteBar[i].alpha = 0;
        }
    };
    return LifeBar;
})();
