
const player = "p"
const grampers = "g"
const wall = "w"
const bg = "b"

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
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111`],
)
// Set the background using the bg bitmap key
setBackground(bg)
  
setSolids([wall,player,grampers])

let level = 0
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
w.......w..........w
wwwwwwwwwwwwwwwwwwww`
]

setMap(levels[level])

setPushables({
  [ player ]: []
})

onInput("w", () => {
  getFirst(player).y -= 1; // Move the player one tile up
})
onInput("a", () => {
  getFirst(player).x -= 1; // Move the player one to the tile left
})
onInput("d", () => {
  getFirst(player).x += 1; // Move the player one tile to the right
})
onInput("s", () => {
  getFirst(player).y += 1; // Move player one tile down
})

afterInput(() => {
  
})
// Define the speed of Grampers (in milliseconds)
const grampersSpeed = 500; // This value determines how fast Grampers moves (lower is faster)
let chasingTime = 0;

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

// Define a variable to track the chasing time

// Function to handle the chasing behavior
const chasePlayer = () => {
  // Check if the chasing time is less than 60 seconds (1 minute)
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
