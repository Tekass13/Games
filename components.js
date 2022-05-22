/* ===== CHARGEMENT DES DIFFERENTS SONS DU JEU===== */
const WALL_HIT = new Audio('sounds/walls.wav');

const PADDLE_HIT = new Audio('sounds/paddle_hits.mp3');

const BRICK_HIT = new Audio('sounds/brick_hits.wav');

const WIN = new Audio('sounds/win.mp3');

const LIFE_LOST = new Audio('sounds/life_lost.mp3');

/* ===== CHARGEMENT DES IMAGES ===== */
const LEVEL_IMG = new Image(40, 40);
LEVEL_IMG.src = 'img/levelUp.png';
const LIFE_IMG = new Image(40, 40);
LIFE_IMG.src = 'img/Vie.png';
const SCORE_IMG = new Image();
SCORE_IMG.src = 'img/score.png';