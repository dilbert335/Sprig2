/*
First time? Check out the tutorial game:s
https://sprig.hackclub.com/gallery/getting_started

@title: GRAMPERS COMES CALLING
@author: 
@tags: []
@addedOn: 2024-00-00
*/

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
.C..F000000D.000
.C..D0DFDF0F.0C0
.C..F0FDFD0D.0.0
....00000000.0.0
....FFF00FFF.0.0
....FFF00FFF.000
..555550055555..` ],
  [wall,bitmap`
3333333333333333
0333333033333333
0333330033333303
0033300003333303
0000030003333303
0000000000000003
3330000030000003
0000000000003003
0030000000030003
0000000300300003
0003333000000000
0030003030000300
3000000000003300
0000000000000000
0000000033000030
0000000000000000`],
  [bg,bitmap`
................
................
.....3.....3....
..3...........3.
................
........3..3....
....3...........
..3.............
.......3......3.
................
..3..3....3.....
................
................
.......3........
..3.........3...
................`],
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

onInput("s", () => {
  getFirst(player).y += 1
})

afterInput(() => {
  
})
