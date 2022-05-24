/* ===== CHARGEMENT DES DIFFERENTS SONS DU JEU===== */
const WALL_HIT = new Audio('sounds/wall.wav');

const PADDLE_HIT = new Audio('sounds/paddle_hit.wav');

const BRICK_HIT = new Audio('sounds/brick_hit.wav');

const WIN = new Audio('sounds/win.wav');

const LIFE_LOST = new Audio('sounds/lose.wav');

const MUSIC = new Audio('sounds/music.mp3');

/* ===== CHARGEMENT DES IMAGES ===== */
const LEVEL_IMG = new Image(40, 40);
LEVEL_IMG.src = 'img/levelUp.png';
const LIFE_IMG = new Image(40, 40);
LIFE_IMG.src = 'img/Vie.png';
const SCORE_IMG = new Image();
SCORE_IMG.src = 'img/score.png';