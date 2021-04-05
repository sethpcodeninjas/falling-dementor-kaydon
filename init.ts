
// All the images for animating our dementor.
let dementorAnimationFrames = [
    img`
    .....fffff......
    ....fffffff.....
    ....ffcccff.....
    ...ffcccccff....
    ...ffcfffcff....
    ..ffffcccffff...
    .fffffffffffff..
    fffffffffffffff.
    fffffffffffffff.
    fffffffffffffff.
    fffcffffffffcff.
    fffffffffffffff.
    ff.fffffffff.ff.
    .f.fffffffff.ff.
    ...fffffffff.f..
    ...f.f.ff..f....
    ...f.f..f.......
    .....f..f.......
    ........f.......
    ................
    `, img`
    .....fffff......
    ....fffffff.....
    ...fffcccff.....
    ...ffcccccfff...
    ..fffcfffcffff..
    .fffffcccffffff.
    fffffffffffffff.
    fffffffffffffff.
    ffffffffffffcff.
    fffcfffffffffff.
    ffffffffffff.ff.
    ff.fffffffff.ff.
    .f.fffffffff.f..
    ....ffffffff....
    ...fffffffff....
    ...f.f.ff..f....
    ...f.f..f.......
    .....f..f.......
    ........f.......
    ................
    `, img`
        .....fffff......
        ....fffffff.....
        ..ffffcccfff....
        .ffffcccccfff...
        fffffcfffcffff..
        ffffffcccfffff..
        ffffffffffffff..
        fffcfffffffcff..
        ffffffffffffff..
        ff.fffffffffff..
        .f.fffffffffff..
        ....ffffffff....
        ....ffffffff....
        ...fffffffff....
        ...f.f.ff..f....
        ...f.f..f.......
        .....f..f.......
        ........f.......
        ................
        ................
    `, img`
    .....fffff......
    .fffffffffff....
    ffffffcccffff...
    fffffcccccffff..
    fffffcfffcffff..
    fffcffcccfffff..
    fffffffffffcff..
    ff.fffffffffff..
    .f.fffffffffff..
    ...ffffffff..f..
    ...ffffffff.....
    ...ffffffff.....
    ..fffffffff.....
    ..f.f.ff..f.....
    ..f.f..f........
    ....f..f........
    .......f........
    ................
    ................
    ................
    `, img`
        .ffffffffffff...
        ffffffffffffff..
        ffffffcccfffff..
        fffffcccccffff..
        fffcfcfffcfcff..
        ffffffcccfffff..
        ff.fffffffffff..
        .f.fffffffffff..
        ...ffffffffff...
        ...fffffffff....
        ...fffffffff....
        ...fffffffff....
        ...fffffffff....
        ...f.f.ff..f....
        ...f.f..f.......
        ...f.f..f.......
        ........f.......
        ................
        ................
        ................
    `, img`
        .....fffff......
        ....fffffff.....
        ..ffffcccfff....
        .ffffcccccfff...
        fffffcfffcffff..
        ffffffcccfffff..
        ffffffffffffff..
        fffcfffffffcff..
        ffffffffffffff..
        ff.fffffffffff..
        .f.fffffffffff..
        ....ffffffff....
        ....ffffffff....
        ...fffffffff....
        ...f.f.ff..f....
        ...f.f..f.......
        .....f..f.......
        ........f.......
        ................
        ................
    `, img`
    .....fffff......
    ....fffffff.....
    ...fffcccff.....
    ...ffcccccfff...
    ..fffcfffcffff..
    .fffffcccffffff.
    fffffffffffffff.
    fffffffffffffff.
    ffffffffffffcff.
    fffcfffffffffff.
    ffffffffffff.ff.
    ff.fffffffff.ff.
    .f.fffffffff.f..
    ....ffffffff....
    ...fffffffff....
    ...f.f.ff..f....
    ...f.f..f.......
    .....f..f.......
    ........f.......
    ................
    `, img`
    .....fffff......
    ....fffffff.....
    ....ffcccff.....
    ...ffcccccff....
    ...ffcfffcff....
    ..ffffcccffff...
    .fffffffffffff..
    fffffffffffffff.
    fffffffffffffff.
    fffffffffffffff.
    fffcffffffffcff.
    fffffffffffffff.
    ff.fffffffff.ff.
    .f.fffffffff.ff.
    ...fffffffff.f..
    ...f.f.ff..f....
    ...f.f..f.......
    .....f..f.......
    ........f.......
    ................
    `
    ]
// All the images for our top obstacles.
let obstacleTopImgs = [img`
    ......555555555555......
    ......599999999995......
    ......595555555595......
    ......595999999595......
    ......595955559595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595955559595......
    ......595999999595......
    ......595555555595......
    ......599999999995......
    ......555555555555......
`, img`
    ......555555555555......
    ......599999999995......
    ......595555555595......
    ......595999999595......
    ......595955559595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595959959595......
    ......595955559595......
    ......595999999595......
    ......595555555595......
    ......599999999995......
    ......555555555555......
    ........................
    ........................
    `, img`
    ......5555555555555.....
    ......5999999999995.....
    ......5955555555595.....
    ......5959999999595.....
    ......5959555559595.....
    ......5959599959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959595959595.....
    ......5959599959595.....
    ......5959555559595.....
    ......5959999999595.....
    ......5955555555595.....
    ......5999999999995.....
    ......5555555555555.....
    `]
// All the images for our bottom obstacles.
let obstacleBottomImgs = [img`
    ........................
    ........................
    .....55555555555555.....
    .....55555555555555.....
    .....59999999999995.....
    .....59555555555595.....
    .....59599999999595.....
    .....59595555559595.....
    .....59595999959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595999959595.....
    .....59595555559595.....
    .....59599999999595.....
    .....59555555555595.....
    .....59999999999995.....
    .....55555555555555.....
`, img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ...5555555555555555.....
    ...5999999999999995.....
    ...5955555555555595.....
    ...5959999999999595.....
    ...5959555555559595.....
    ...5959599999959595.....
    ...5959595555959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595995959595.....
    ...5959595555959595.....
    ...5959599999959595.....
    ...5959555555559595.....
    ...5959999999999595.....
    ...5955555555555595.....
    ...5999999999999995.....
    ...5555555555555555.....
`, img`
    ........................
    .....55555555555555.....
    .....59999999999995.....
    .....59555555555595.....
    .....59599999999595.....
    .....59595555559595.....
    .....59595999959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595955959595.....
    .....59595999959595.....
    .....59595555559595.....
    .....59599999999595.....
    .....59555555555595.....
    .....59999999999995.....
    .....55555555555555.....
`]
let dementor: Sprite = null
function startGame(){
   
    // Creating the dementor sprite with first frame and spritekind player.
    dementor = sprites.create(dementorAnimationFrames[0], SpriteKind.Player)
   
    // Initializing score to 0.
    info.setScore(0)
    
    // Screen effects.
    effects.blizzard.startScreenEffect(0, 500)
    
    effects.clouds.startScreenEffect(0, 0.5)
    
    // Setting background color.
    scene.setBackgroundColor(6)
    
    // Initializing gravity.
    dementor.ay = 150
}
//Creating the obstacle and gap sprites.
game.onUpdateInterval(1500, function() {
    let gapNumber = randint(0, 2)
    /* 0 means gap is towards top, 
        1 means gap is in the middle, 
     2 means gap is towards the bottom */
    let topImg = obstacleTopImgs[gapNumber]
    let bottomImg = obstacleBottomImgs[gapNumber]
    // Gap image
    let gapImage = image.create(1, scene.screenHeight())
    gapImage.fill(1)
    // Gap Sprite
    let gapSprite = sprites.create(gapImage, SpriteKind.Gap) 
    gapSprite.vx = -45
})