/*
First time? Check out the tutorial game:s
https://sprig.hackclub.com/gallery/getting_started

@title: GRAMPERS...THE SLAUGHTER HOUSE
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"
const grampers = "g"
const wall = "w"
const bg = "b"
const trigger ="t"
const youwin42 = "y"
// Set the legand for sprites
setLegend(
  [player, bitmap`
................
................
................
......6.........
.....333........
...33333........
.....0C0........
.....CCC........
......6.........
....C666C99.....
.....666.99.....
.....555........
....9C.C9.......
................
................
................`],
  [grampers,bitmap`
...L...LL...L...
..LLCCCCCCCCLL..
..LC000CC000CL..
...CC50CC05CC..1
...C3CCCCCC3C.1.
...C33333332229.
......CCCC......
....F0CCCC0D....
.CCCD0DFDF0FCCC.
.C..F0FDFD0D.000
.C..D0DFDF0F.0C0
.C..F0FDFD0D.0.0
....00000000.0.0
....FFF00FFF.0.0
....FFF00FFF.000
..555550055555..` ],
  [wall,bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333`],
  [bg,bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [trigger,bitmap`
CCCCCCCCCCCCCCCC
C00CCCCCCCCCCCCC
C0CCCCCC0CC3CC0C
C00C3C3CCCC3CC0C
C0CCC3CC0C333CCC
C00C3C3C0CC3CC0C
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
................
................
................
................
................
................
................
................`],
  [youwin42,bitmap`
3333333333333333
3323232223232333
3322232323232333
3332332223222333
3333333333333333
3233323233222333
3232323333232333
3222223233232333
3333333333333333
0000000000000000
0000000000000000
0000600000060000
0000000000000000
0006000000006000
0006666666666000
0000000000000000`],
)
// Set the background using the bg bitmap key 
setSolids([wall, grampers, player])

let level = 4
const levels = [
  map`
wwwwwwwwwwwwwwwwwwww
w........w......ww.w
w...w....w.w..w.wwww
wp..w.w..w...w..wwgw
wwwww....ww........w
w.......ww.www.w.w.w
w..w..w...w......w.w
w..w..........w....w
w.www.........w....w
w...w.w..w....w..w.w
w...w..w.w.......w.w
ww..w.........w....w
wwwww..w...w.......w
ww.w.w..www.....w..w
w..w...........w...w
w..........w.w..w..w
wwww..w.w......wwwww
w..ww......w...w...w
w.......w.........tw
wwwwwwwwwwwwwwwwwwww`,
  map`
wwwwwwwwww
wp.......w
www...w.ww
w.g....w.w
w.ww..w..w
w..w.w...w
ww.....w.w
w..w....ww
ww...w..tw
wwwwwwwwww`,
  map`

  map`,
  map`
wwwwwwwwww
w...ww..gw
w...ww...w
w.w.ww...w
w..www...w
w..www...w
w..ww....w
w..w..p..w
w..wwww..w
w..wwww..w
w....w...w
w.t..w...w
w....w...w
w........w
w..w.....w
w.ww...w.w
wwwwwwwwww`,
  map`
wwwwwwwwww
wt.......w
w.w....w.w
w...w..w.w
w.g....w.w
w......w.w
w..ww....w
w..wp....w
w........w
wwwwwwwwww`,
  map`
wwwwwwwww
w.w.....w
w.ww....w
w.......w
w.......w
w....w..w
w.......w
w.......w
wwwwwwwww`,
  map``,
  map``,
  map``,
  map``,
  map``,
  map``,
  map``,
  map``
]

let chasingTime = 0;

const isWithinOnePixel = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
};

const checkTouching = () => {
  const playerSprite = getFirst(player);
  if (!playerSprite) {return}

  const grampersSprite = getFirst(grampers);
  const exitSprite = getFirst(trigger);

  if (!grampersSprite || !exitSprite) {return}

  const pX = playerSprite.x
  const pY = playerSprite.y
  
  if (isWithinOnePixel(pX, pY, grampersSprite.x, grampersSprite.y)) {
    setMap(levels[level])
  } else if (pX === exitSprite.x && pY === exitSprite.y) {
    level++
    if (levels[level]) {
      setMap(levels[level])
    } else {
      alert("You win");
    }
  }
}

setMap(levels[level])
setPushables({
  [ player ]: []
})

onInput("w", () => {getFirst(player).y -= 1;})
onInput("a", () => {getFirst(player).x -= 1;})
onInput("d", () => {getFirst(player).x += 1;})
onInput("s", () => {getFirst(player).y += 1;})

setInterval(checkTouching, 500)

// Define the speed of Grampers (in milliseconds)
const grampersSpeed = 500; // This value determines how fast Grampers moves (lower is faster)

// Function to handle the chasing behavior with speed control
const chasePlayerWithSpeed = () => {
  if (chasingTime < 60) {
    const playerSprite = getFirst(player);
    const grampersSprite = getFirst(grampers);

    // Logic to chase the player (Example: move vertically towards the player)
    if (playerSprite.y < grampersSprite.y) {
      grampersSprite.y -= 1; // Move up towards the player
    } else if (playerSprite.y > grampersSprite.y) {
      grampersSprite.y += 1; // Move down towards the player
    }

    if (playerSprite.x < grampersSprite.x) {
      grampersSprite.x -= 1;
    } else if (playerSprite.x > grampersSprite.x) {
      grampersSprite.x += 1;
    }

    chasingTime++;

    // Call chasePlayerWithSpeed function recursively after the specified speed for smooth movement
    setTimeout(chasePlayerWithSpeed, grampersSpeed); // Move at the specified speed
  }
}

// Start the chasePlayerWithSpeed function with speed control
chasePlayerWithSpeed();

// Function to handle the chasing behavior
const chasePlayer = () => {
  // Check if the chasing time is less than 86,400 seconds ( 1,440 minute)
  if (chasingTime < 86,400) {
    const playerSprite = getFirst(player);
    const grampersSprite = getFirst(grampers);

    // Logic to chase the player (Example: move vertically towards the player)
    if (playerSprite.y < grampersSprite.y) {
      grampersSprite.y -= 1; // Move up towards the player
    } else if (playerSprite.y > grampersSprite.y) {
      grampersSprite.y += 1; // Move down towards the player
    }

    if (playerSprite.x < grampersSprite.x) {
      grampersSprite.x -= 1;
    } else if (playerSprite.y > grampersSprite.x) {
      grampersSprite.x += 1;
    }

    // Increment the chasing time by 1 second
    chasingTime++;

    // Call chasePlayer function recursively after a short delay for smooth movement
    setTimeout(chasePlayer, 1000); // Move every 1 second
  }
}

// Start the chasePlayer function to initiate the chasing
chasePlayer();
