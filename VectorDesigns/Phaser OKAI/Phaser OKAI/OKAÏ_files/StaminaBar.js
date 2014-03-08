var StaminaBar = (function () {
    function StaminaBar(game) {
        game.loader.addImageFile('bar', 'assets/BARRE_bleu.png');
        game.loader.addImageFile('staminaBarEmpty', 'assets/BARRE_vide.png');
        this.spriteBar = [];
    }
    StaminaBar.prototype.create = function (game) {
        this.spriteBarEmpty = game.createSprite(30, 60, 'staminaBarEmpty');
        for (var i = 0; i < 100; i++) {
            this.spriteBar[i] = game.createSprite(36 + i, 66, 'bar');
        }
    };

    StaminaBar.prototype.update = function (game, heroStamina) {
        for (var i = 0; i < heroStamina; i++) {
            this.spriteBar[i].alpha = 1;
        }
        for (var i = heroStamina; i < 100; i++) {
            this.spriteBar[i].alpha = 0;
        }
    };
    return StaminaBar;
})();
