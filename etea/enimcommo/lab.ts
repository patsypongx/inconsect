
const {GameCenter} = require('@google-cloud/game-center');
const gameCenter = new GameCenter();
const game = 'my-game';

gameCenter.setActiveGame(game);

