/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Agriculture simulator
@author: 
@tags: []
@addedOn: 2024-00-00
*/

//////////
const player = "p"

// Seeds \\
const watermelonseed = "f"
const ewjvhabfbseed = "e"
const tomatoseed = "y"
const carrotseed = "h"

const Seeds = [watermelonseed, ewjvhabfbseed, tomatoseed, carrotseed]

// Plants \\
const watermelon= "w"
const ewjvhabfb="q"
const tomato= "t"
const carrot= "c"

// Garden Beds \\
const gardenbed= "g"

const gardenbedwatermelon = "t" 
const gardenbedewjvhabfb = "l"
const gardenbedtomato = "m"
const gardenbedcarrot = "u"

const GardenBeds = [gardenbedwatermelon, gardenbedewjvhabfb, gardenbedtomato, gardenbedcarrot]

// Misc. \\
const wallig= "z"
const waterdrop = "n"

const toiletwateringhole= "k"
const myst = "o"
const bg = "b"
//////////

setLegend(
  [ player, bitmap`
................
.......33.......
......3333......
....33333333....
...3333333333...
....92999929....
....97999979....
....99900999....
....99999999....
....25299252....
....95222259....
....91555519....
....95511559....
....55555555....
...3355..5533...
...3333..3333...` ],

  // Seeds \\
  [watermelonseed,bitmap`
................
................
................
................
................
................
................
...D44D44D......
...D44D44D......
...D44D44D......
................
................
................
................
................
................`],
  [ewjvhabfbseed,bitmap`
................
................
................
................
................
................
......4.........
....333333......
....33333.......
.....333........
......33........
......33........
......33........
................
................
................`],
  [tomatoseed,bitmap`
................
................
................
................
................
................
.......DD.......
......3333......
.....333333.....
.....333333.....
......3333......
................
................
................
................
................`],
  [carrotseed,bitmap`
................
................
.......4........
.......4........
.......4........
.......4........
......999.......
......999.......
......999.......
......999.......
......999.......
......999.......
................
................
................
................`],

  // Plants \\
  [ watermelon,bitmap`
................
................
................
................
................
.....DDDD.......
....444444......
....DDDDDD......
....444444......
.....DDDD.......
................
................
................
................
................
................`],
  [ewjvhabfb,bitmap`
................
................
................
................
.....4.4........
.....444........
.....333........
.....333........
......3.........
................
................
................
................
................
................
................`],
  [ tomato,bitmap`
................
................
................
.......D........
......DDD.......
.....33333......
.....33333......
.....33333......
................
................
................
................
................
................
................
................`],
  [ carrot,bitmap`
................
................
................
................
......D.D.......
.......D........
.....99999......
......999.......
.......9........
................
................
................
................
................
................
................`],

  // Garden Beds \\
  [ gardenbed,bitmap`
................
................
................
................
..LLLLLLLLLLLL..
..LCCCCCCCCCCL..
..LCCCCCCCCCCL..
..LCCCCCCCCCCL..
..LCCCCCCCCCCL..
..LCCCCCCCCCCL..
..LLLLLLLLLLLL..
................
................
................
................
................` ],

  [gardenbedwatermelon,bitmap`
................
................
................
................
................
.LLLLLLLLLLLLLL.
.LCCCCCCCCCCCCL.
.LC4CCDCC4CCDCL.
.LCCCCCCCCCCCCL.
.LCCCCCCCCCCCCL.
.LCDCC4CCDCC4CL.
.LCCCCCCCCCCCCL.
.LLLLLLLLLLLLLL.
................
................
................`],
  [gardenbedewjvhabfb,bitmap`
................
................
................
................
................
................
................
.LLLLLLLLLLLLLL.
.LCCCCCCCCCCCCL.
.LC3DC3DC3DC3DL.
.LCCCCCCCCCCCCL.
.LC3DC3DC3DC3DL.
.LCCCCCCCCCCCCL.
.LLLLLLLLLLLLLL.
................
................`],
  [gardenbedtomato,bitmap`
................
................
................
................
................
................
................
................
.LLLLLLLLLLLLLL.
.LCCCCCCCCCCCCL.
.LC3C3C3C3C3C3L.
.LCCCCCCCCCCCCL.
.LC3C3C3C3C3C3L.
.LCCCCCCCCCCCCL.
.LLLLLLLLLLLLLL.
................`],
  [gardenbedcarrot,bitmap`
................
................
................
................
................
................
................
................
.LLLLLLLLLLLLLL.
.LCCCCCCCCCCCCL.
.LC9C9C9C9C9C9L.
.LCCCCCCCCCCCCL.
.LC9C9C9C9C9C9L.
.LCCCCCCCCCCCCL.
.LLLLLLLLLLLLLL.
................`],

  // Misc. \\
  [ wallig,bitmap`
DDDDDDDDDDDDDDDD
DDDDD8DD8DDDD8DD
DD8DDD8DD8DDDD8D
DDD8DDDDDDDD8DDD
DDDDDDDD8DDDD8DD
D8DDD8DDD8DDDDDD
DD8DDD8DDDD8DD8D
DDDDDDDDD8DD8DD8
DD8DD8DDDD8DDDDD
DDD8DD8DDDDDDDDD
DDDDDDDDD8DDDDDD
DD8DDDD8DD8DD8DD
8DD8D8DD8DDDDD8D
D8DDDD8DDDD8DDDD
DDD8DDDDD8DD8DDD
DDDD8DDDDD8DDDDD`],
  [ waterdrop, bitmap`
......77........
......777.......
.....7777.......
.....77777......
....7777777.....
...77.77777.....
...7.7777777....
...7.7777777....
...777777777....
...77777777.....
....7777777.....
....777777......
.....7777.......
.....777........
......77........
................`],

  [toiletwateringhole,bitmap`
................
.....3333333....
....333333333...
...33333333333..
..3333333333333.
.33CC0000000CC33
..CC002000200CC.
..L00000000000L.
..L00200000200L.
..L00222222200L.
..L.000000000.L.
.....4444444....
.....4444444....
.....4.....4....
..HHHH.....HHHH.
..HH.H.....H.HH.`],
  [myst, bitmap`
................
................
................
................
..........11111.
..........11111.
....11111111LL1.
.LLL1111111.77..
.L..1111111.77..
.L..1111111.77..
.LLL1111111.....
....1111111.....
................
................
................
................`],
  [bg,bitmap`
D444D4444444444D
44D44D444D44D444
444D44D4444444D4
4D44444444444444
44444D44D444D444
D4444444444444D4
44D4444D44D44444
4444D44444444D44
4444444D44D4D444
4D4444444444444D
4444D444D4D4D4D4
444444D444444444
44D4D44D4444D4D4
444D444444D44444
4444444D4444D44D
4D44D44444D44D44`],
)
// Set the background using the bg bitmap key
setSolids([watermelonseed,ewjvhabfbseed,tomatoseed,carrotseed,wallig,player,myst ])

let level = 0
const levels = [
  map`
zzzzzzzzzzzzzzzzzzz
zzzzzzzzzzzzzz....z
zzzzzz.......z.o..z
zk...........z....z
zzzzzz.......z....z
zzzzzz............z
zzzzzz.........e.gz
zzzzzz............z
zp.............f.gz
zzzzzz............z
zzzzzz.........y.gz
zzzzzz............z
z............z.h.gz
z............z....z
z............z....z
z............z....z
zzzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzzz
zk..............pz
zzzz..........zz.z
z..........zzz...z
z..........z.zz..z
z..zzzzz...z.....z
z......z...z.....z
z..z....z..z.e.h.z
z..z....zzz...y..z
z..o........f....z
z.....ggggggg....z
zzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzz
zk.....pz
zzz...zzz
z.......z
z.......z
z..gggg.z
z.......z
z.......z
z..feyh.z
z.......z
z.o.....z
z.......z`,
  map`
zzzzzzzzzz
zk......pz
z.o......z
z........z
z........z
z..gggg..z
z........z
z..feyh..z
z........z
z........z
zzzzzzzzzz`,
  map`
zzzzzzzzzzzz
zzp........z
zkz........z
z..z.......z
z....feyh..z
z.o........z
z....gggg..z
zzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzz
zkzp........z
z..z..wtcq..z
z.zz........z
z...o.......z
z.....gggg..z
zzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzz
zwqct......zzzzz
z...........pz.z
z..o.........z.z
z...gggg..zz.z.z
z........zzzzz.z
zzz.........zz.z
z.k............z
zzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzzzzzz
z...................z
zp......ctqw........z
zzzzz...........zzzzz
z...z...........z...z
z.k.z...........z...z
z...z...........z...z
z...zz.........zz...z
z...................z
z...................z
z......ggggggg......z
z...................z
z...................z
zzzzzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzz
z..o............z
z.....g........kz
zzzz.........zzzz
z...z...........z
z...z..zz.......z
z...zzzz........z
z...cqtw........z
z..........zzzzzz
zzz........z....z
z.z........zz...z
z......zzzzzz...z
zpzzz...........z
zzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzzzzzzzz
z.......o.............z
zp........ggggggggg...z
zzzzzz................z
z....z................z
z....zz.....zzzz......z
z.....z....zz..z......z
z.....z....z..zz...z..z
z.....z....z........z.z
z....zz....z.z......z.z
z....z.....z........z.z
z...zz.....zz.......z.z
z...z.....z.z......zz.z
z...z....zz.z......z..z
z...zzzzzz..zz....zz..z
z....wcqt.............z
zk....................z
zzz.........z.........z
z...........zzzz......z
zzzzzzzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzz
z.....o........z
zk.....gggg....z
zz.............z
zz......zz.....z
zzp.....zzz....z
z.z.....z..z...z
z.z.....z...z..z
z.z.....z...z..z
z..z.....z..z..z
z..z...zz......z
z..zz.zz.......z
z...zz.........z
z......cqwt....z
z..............z
zzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzz
z.............z
z...p...cwtq..z
z...z.........z
z...z.........z
z...zk........z
z...z...zz....z
z..z.z.z..zz..z
z..z.z.....z..z
z...z......z..z
z.........zzz.z
z....o........z
z.....g...z...z
z..zzz...z....z
z..z.z........z
z....z...z....z
z....z....zzzzz
z....z........z
z....zzz......z
z.............z
zzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzzzzz
zp...............z.z
z................z.z
z....o..........zz.z
z..zzz.........zz..z
z.zk.zg........z...z
z....z..zz....z....z
z....z..z.z...z....z
z....z.z..z........z
z....zzz..zz.......z
z..........zzzzz...z
z..ctwq........z...z
z..................z
zzzzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzz
zp...........z
z............z
z...zz..zz...z
z..t.z..z.c..z
z....zz.z....z
z.q...zzz.w..z
z...........kz
zzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzz
zk.........z
z.z.o..z...z
z..z.gz....z
z...zz.....z
z......qtcwz
z.........pz
zzzzzzzzzzzz`,
  map`
zzzzzzzzzz
zk......pz
z..o.....z
z...g....z
z.zzzzzz.z
z.z....z.z
z.z....z.z
z.z....z.z
z.z.qt.z.z
z.z....z.z
z.z....z.z
z.z....z.z
z.z....z.z
z.z....z.z
z........z
zc......wz
z........z
zzzzzzzzzz`,
  map`
zzzzzzzzzzzzz
zk.........pz
z....o.g....z
z..zz.zzz...z
z...z.z.z...z
z...zzz.....z
z.......ctqwz
z...........z
zzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzz
zk...........z
z.....c.t....z
z..z.zzzzz...z
z..zz....z...z
z........z...z
z.....zz.z...z
z...zz..zz...z
z.p.....zz...z
z.zz.w.......z
z.z....q.....z
z......zz....z
z.z...zz.....z
z.z...z......z
z.z.o..gggg..z
zzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzz
z....zzp.....z
z....z.z.....z
z......zzzz..z
zk...z.......z
zzzz.........z
z..t..c.qw.o.z
z.....ggggg..z
zzzzzzzzzzzzzz`,
  map`
zzzzz
zk.pz
zz..z
z...z
zc.wz
z...z
z.q.z
z...z
z...z
z...z
z...z
z...z
z.o.z
z...z
z.t.z
zgggz
zzzzz`,
  map`
zzzzzzzzzzzzzzzzzzz
z.................z
zk..........zzzp..z
z..zzzzz....z..z..z
z.zz...z....z..z..z
z......z...z...z..z
z......z..z...zz..z
z.ct.qwzzz....zz..z
z.................z
z..o..............z
z....gggg.........z
zzzzzzzzzzzzzzzzzzz`,
  map`
zzzzzzzzzzzzzzzzozz
zk...............pz
zz................z
z....c.t.q.w.o....z
z.................z
z.................z
z.................z
z......ggggggg....z
zzzzzzzzzzzzzzzzzzz`,  
]

setMap(levels[level])

setPushables({
[player]: [...Seeds, myst, watermelon, tomato, ewjvhabfb, carrot],
})

onInput("w", () => getFirst(player).y -= 1)
onInput("a", () => getFirst(player).x -= 1)
onInput("d", () => getFirst(player).x += 1)
onInput("s", () => getFirst(player).y += 1)

const WATERING_TIME = 5

onInput("j", () => {
  const plr = getFirst(player)
  let tile = getTile(plr.x, plr.y).filter(t => GardenBeds.indexOf(t.type) !== -1)
  if (tile.length === 0) {return}
  tile = tile[0]

  const waterx = tile.x
  const watery = tile.y - 1

  const alreadywater = getTile(waterx, watery).find(t => t.type === waterdrop)
  if (alreadywater) {return}

  addSprite(waterx, watery, waterdrop)
  const waters = getTile(waterx, watery).find(t => t.type === waterdrop)
  setTimeout(() => waters.remove(), WATERING_TIME * 1000)
})

const handleSeeds = (type) => {
  const stuffs = getAll(type)
  if (stuffs.length === 0) {
    return
  }

  stuffs.forEach(stuff => {
    const tile = getTile(stuff.x, stuff.y)
    if (!tile) {
      return// this should not happen but being safe
    }

    const gardenBed = tile.find(t => t.type === gardenbed)
    if (!gardenBed) {return}

    const sIndex = Seeds.indexOf(type)
    if (sIndex === -1) {return}

    const gIndex = GardenBeds[sIndex]
    clearTile(gardenBed.x, gardenBed.y)
    addSprite(gardenBed.x, gardenBed.y, gIndex)

   
  })
}

afterInput(() => Seeds.forEach(seed => handleSeeds(seed)))
playTune(tune`
150.7537688442211: D5~150.7537688442211 + E5~150.7537688442211 + F5~150.7537688442211,
150.7537688442211: C5~150.7537688442211 + E5~150.7537688442211 + G5~150.7537688442211 + A5~150.7537688442211 + F5~150.7537688442211,
150.7537688442211: C5~150.7537688442211 + D5~150.7537688442211 + E4~150.7537688442211 + E5~150.7537688442211 + A5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + D4~150.7537688442211 + F4~150.7537688442211 + D5~150.7537688442211 + E5~150.7537688442211,
150.7537688442211: F5~150.7537688442211 + G4~150.7537688442211 + B4~150.7537688442211 + E4~150.7537688442211 + E5~150.7537688442211,
150.7537688442211: F5~150.7537688442211 + G4~150.7537688442211 + A4~150.7537688442211 + B4~150.7537688442211 + C5~150.7537688442211,
150.7537688442211: G5~150.7537688442211 + F4~150.7537688442211 + B4~150.7537688442211 + G4~150.7537688442211 + C5~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + E4~150.7537688442211 + G5~150.7537688442211 + F5~150.7537688442211 + E5~150.7537688442211,
150.7537688442211: B5~150.7537688442211 + E4~150.7537688442211 + A4~150.7537688442211 + G4~150.7537688442211 + B4~150.7537688442211,
150.7537688442211: B5~150.7537688442211 + F4~150.7537688442211 + E4~150.7537688442211 + A4~150.7537688442211 + G4~150.7537688442211,
150.7537688442211: B5~150.7537688442211 + E4~150.7537688442211 + F4~150.7537688442211 + G4~150.7537688442211 + E5~150.7537688442211,
150.7537688442211: B5~150.7537688442211 + E4~150.7537688442211 + G4~150.7537688442211 + D5~150.7537688442211 + A4~150.7537688442211,
150.7537688442211: B5~150.7537688442211 + E4~150.7537688442211 + G4~150.7537688442211 + A4~150.7537688442211 + D5~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + E4~150.7537688442211 + G4~150.7537688442211 + F4~150.7537688442211 + E5~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + F4~150.7537688442211 + E5~150.7537688442211 + A4~150.7537688442211 + B4~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + F4~150.7537688442211 + E5~150.7537688442211 + B4~150.7537688442211 + D5~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + F4~150.7537688442211 + E5~150.7537688442211 + B4~150.7537688442211 + A4~150.7537688442211,
150.7537688442211: A5~150.7537688442211 + G5~150.7537688442211 + F5~150.7537688442211 + D5~150.7537688442211 + C5~150.7537688442211,
150.7537688442211: D4~150.7537688442211 + E4~150.7537688442211 + G4~150.7537688442211 + F5~150.7537688442211 + D5~150.7537688442211,
150.7537688442211: F4~150.7537688442211 + A4~150.7537688442211 + F5~150.7537688442211 + D5~150.7537688442211 + G5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + G5~150.7537688442211 + F5~150.7537688442211 + E5~150.7537688442211 + C4~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + D5~150.7537688442211 + F5~150.7537688442211 + G5~150.7537688442211 + C5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + B4~150.7537688442211 + D5~150.7537688442211 + F5~150.7537688442211 + G5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + B4~150.7537688442211 + C5~150.7537688442211 + F5~150.7537688442211 + G5~150.7537688442211,
150.7537688442211: B4~150.7537688442211 + F5~150.7537688442211 + A4~150.7537688442211 + G5~150.7537688442211 + A5~150.7537688442211,
150.7537688442211: B4~150.7537688442211 + A4~150.7537688442211 + F5~150.7537688442211 + G5~150.7537688442211 + B5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + F5~150.7537688442211 + D4~150.7537688442211 + B4~150.7537688442211 + A5~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + B4~150.7537688442211 + F5~150.7537688442211 + D4~150.7537688442211 + A5~150.7537688442211,
150.7537688442211: B4~150.7537688442211 + E5~150.7537688442211 + F5~150.7537688442211 + A4~150.7537688442211 + B5~150.7537688442211,
150.7537688442211: C5~150.7537688442211 + D5~150.7537688442211 + A4~150.7537688442211 + F5~150.7537688442211 + G4~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + G5~150.7537688442211 + F5~150.7537688442211 + B4~150.7537688442211,
150.7537688442211: A4~150.7537688442211 + B4~150.7537688442211 + C5~150.7537688442211`, Infinity)
