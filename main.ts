controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy = 50
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let bottomImage: Image = null
let topimage: Image = null
let gap = 0
let mySprite: Sprite = null
scene.setBackgroundImage(img`
a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b 
a a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b b 
a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b 
a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b 
a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b a 
a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b a a a 
a a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a 
a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a 
a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a 
a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a 
a a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a 
a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a 
a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a 
a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a 
a a a a a a a a a a a a a a b b b a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b a a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a b b b b a a a a a a a a a a a b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a b b b b a a a a a a a a a a a b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a b b b a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b 
a a a a a a a a a a b b b a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b 
a a a a a a a a a b b b b a a a a a a a a a a b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b 
a a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b 
a a a a a a a a a b b b a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a 
a a a a a a a a a b b b a a a a a a a a a a b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a 
a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a 
a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a 
a a a a a a a a b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a 
a a a a a a a a b b b a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a 
a a a a a a a b b b b a a a a a a a a a b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a 
a a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a 
a a a a a a a b b b a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a 
a a a a a a a b b b a a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a 
a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a 
a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a 
a a a a a a b b b a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a 
a a a a a a b b b a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a b b b a a a a a a a a b b b a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a b b b a a a a a a a a b b b a a a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a b b b a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a b b b b a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a b b b b a a a a a a a b b b a a a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a b b b a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a b b b a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b b a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b b a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b a a a a a a a b b b a a a a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b 
a a b b b b a a a a a a b b b a a a a a a a a a b b b b a a a a a a a a b b b b b a a a a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b 
a a b b b b a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b 
a a b b b a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a 
a a b b b a a a a a b b b b a a a a a a a a b b b b a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a 
a b b b b a a a a a b b b b a a a a a a a a b b b b a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a 
a b b b b a a a a a b b b a a a a a a a a b b b b a a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a 
a b b b a a a a a b b b b a a a a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a 
a b b b a a a a a b b b b a a a a a a a b b b b a a a a a a a b b b b b a a a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a 
b b b b a a a a a b b b a a a a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a 
b b b b a a a a b b b b a a a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a 
b b b a a a a a b b b b a a a a a a a b b b b a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a b b b b b b a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a 
b b b a a a a b b b b a a a a a a a b b b b a a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a 
b b b a a a a b b b b a a a a a a a b b b b a a a a a a b b b b a a a a a a a a a a b b b b a a a a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b a a a a b b b a a a a a a a b b b b a a a a a a b b b b b a a a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a b b b b b b a a a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b a a a b b b b a a a a a a a b b b b a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a b b b b b b a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b a a a a b b b b a a a a a a b b b b a a a a a a b b b b a a a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a b b b b b b a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b a a a a b b b a a a a a a a b b b b a a a a a b b b b b a a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b a a a b b b b a a a a a a b b b b a a a a a a b b b b a a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a b b b b b a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b a a a b b b b a a a a a a b b b b a a a a a b b b b a a a a a a a a a b b b b a a a a a a a b b b b b a a a a a a b b b b b b a a a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a b b b a a a a a a b b b b a a a a a b b b b b a a a a a a a a b b b b a a a a a a a b b b b b a a a a a a b b b b b b a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a b b b b a a a a a b b b b b a a a a b b b b b a a a a a a a a b b b b b a a a a a a b b b b b a a a a a a b b b b b b a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b 
a a a a b b b b a a a a a b b b b a a a a a b b b b a a a a a a a a b b b b b a a a a a b b b b b b a a a a a a b b b b b a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b 
a a a b b b b a a a a a b b b b a a a a a b b b b a a a a a a a a b b b b b a a a a a b b b b b b a a a a a b b b b b b a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b 
a a a b b b b a a a a a b b b b a a a a b b b b b a a a a a a a b b b b b a a a a a b b b b b b a a a a a b b b b b b a a a a a a a a a a a b b b b b b a a a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a 
a a a b b b a a a a a b b b b a a a a a b b b b a a a a a a a a b b b b a a a a a b b b b b a a a a a a b b b b b b a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a 
a a b b b b a a a a a b b b b a a a a b b b b a a a a a a a a b b b b a a a a a b b b b b a a a a a a b b b b b a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a 
a a b b b b a a a a b b b b a a a a b b b b b a a a a a a a b b b b b a a a a b b b b b a a a a a a b b b b b a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a 
a a b b b a a a a a b b b b a a a a b b b b a a a a a a a b b b b b a a a a b b b b b a a a a a b b b b b b a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a 
a b b b b a a a a b b b b a a a a b b b b a a a a a a a b b b b b a a a a b b b b b a a a a a b b b b b b a a a a a a a a a b b b b b b a a a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a 
b b b b b a a a a b b b b a a a b b b b b a a a a a a b b b b b a a a a b b b b b a a a a a b b b b b b a a a a a a a a b b b b b b b a a a a a a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b a a a a b b b b a a a a b b b b a a a a a a b b b b b a a a a b b b b b a a a a a b b b b b a a a a a a a a b b b b b b b a a a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b a a a a b b b b a a a b b b b a a a a a a a b b b b a a a a b b b b b a a a a b b b b b b a a a a a a a a b b b b b b b a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b a a b b b b a a a b b b b b a a a a a a b b b b a a a a b b b b b a a a a b b b b b b a a a a a a a b b b b b b b a a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b a a b b b b a a a b b b b a a a a a a b b b b b a a a b b b b b a a a a b b b b b b a a a a a a a b b b b b b a a a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b a a a b b b b a a a a a a b b b b b a a a b b b b b a a a a b b b b b a a a a a a a b b b b b b b a a a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b a a b b b b b a a a a a b b b b b a a a b b b b b a a a a b b b b b a a a a a a b b b b b b b a a a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b a a a b b b b a a a a a b b b b b a a a b b b b b a a a b b b b b b a a a a a a b b b b b b b a a a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b a a b b b b a a a a a a b b b b a a a b b b b b a a a b b b b b b a a a a a b b b b b b b a a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b a b b b b b a a a a a b b b b a a a b b b b b a a a b b b b b b a a a a a b b b b b b a a a a b b b b b b b b b b a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b a a a a a b b b b b a a b b b b b a a a b b b b b a a a a a b b b b b b b a a a b b b b b b b b b b a a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b a a a a a b b b b b a a b b b b b a a a b b b b b a a a a b b b b b b b c c b b b b b b b b b b a a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b a a a a a b b b b b a a b b b b b a a b b b b b b a a a a b b b b b b b c b b b b b b b b b a a a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b 
b b b b b b b b b b b b a a a a b b b b b a a b b b b b a a b b b b b b a a a b b b b b b b b b b b b b b b b b a a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b a a b b b b b a a b b b b b a a b b b b b b a a a b b b b b b b b b b b b b b b a a a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b a a b b b b a a b b b b b a a b b b b b a a a b b b b b b b b b b b b b b b a a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a 
b b b b b b b b b b b b b b b b b b a a b b b b b c b b b b b b a a b b b b b b b b b b b b b b a a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b a b b b b b c b b b b b b a a b b b b b b b b b b b b a a a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b c b b b b b c b b b b b b c b b b b b b b b b b b b a a a a b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b c b b b b b c b b b b b c c b b b b b b b b b b c c c b b b b b b b b b b b b b b a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b c b b b b b c b b b b b b b b b b c b b b b b b b b b b b b b b c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
`)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . c c . . . . . . . . . . . . . . . 
. . . . . . . . . . . . c c c 6 5 c 6 6 . . . . . . . . . . . . 
. . . . . . . . . . . . c 6 c 5 5 c 7 6 . . . . . . . . . . . . 
. . . . . . . . . . . 6 c c 7 5 5 7 c 6 6 . . . . . . . . . . . 
. . . . . . . . . . c c 7 7 7 7 7 5 7 7 c 6 . . . . . . . . . . 
. . . . . . . . . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . . . . . . . . . 
. . . . . . . . c 7 7 7 6 c 7 c 6 7 6 5 7 5 7 6 . . . . . . . . 
. . . . . . . . c c c 6 6 6 c 6 6 6 6 5 5 6 6 6 . . . . . . . . 
. . . . . . c 6 6 c c 7 6 6 6 6 6 7 7 7 7 c 6 7 6 6 . . . . . . 
. . . . . c 7 7 7 c 7 7 6 6 7 6 6 7 7 6 7 7 6 7 7 7 6 . . . . . 
. . . . . c c 6 6 c c c c 7 7 c 6 7 7 c c 6 6 6 6 6 6 . . . . . 
. . . . c 6 7 6 6 6 6 6 c 7 c 6 7 6 7 6 7 7 7 7 7 7 6 6 . . . . 
. . . c c 7 7 7 6 6 6 6 6 6 6 7 7 7 6 7 7 7 7 6 6 7 c 6 6 . . . 
. 6 6 6 c c 6 6 7 7 6 6 6 6 6 7 7 7 7 7 7 7 7 7 6 6 7 7 6 6 6 . 
. 6 7 7 7 6 6 7 7 c 6 7 6 6 7 7 7 7 7 7 7 6 6 7 7 6 7 7 7 7 6 . 
c c 6 6 6 6 c c c 6 7 7 6 7 7 7 6 7 7 7 7 7 6 c c 7 7 6 7 6 6 6 
c 6 6 6 7 7 7 6 6 7 7 6 6 7 7 6 c 7 7 6 7 7 7 c 6 7 7 7 6 c 6 6 
. c 6 7 7 7 6 6 6 c c c 6 6 7 c 6 7 6 c c 6 6 6 6 6 7 7 7 6 c . 
. c c 6 6 6 6 7 6 6 6 6 6 c c 6 6 6 6 6 6 6 6 7 7 6 c c 6 6 6 . 
. . . 6 6 7 7 6 c 6 6 6 6 6 6 6 6 6 6 7 7 6 6 7 7 6 6 c c c c . 
. . . c c 7 6 c 6 6 7 6 6 6 6 6 6 6 7 6 7 7 6 6 7 7 7 6 c . . . 
. . . 6 c c c c 6 7 7 6 6 6 6 6 6 7 7 6 7 7 7 c 7 7 6 6 6 . . . 
. . . . . . 6 c c c 7 c 6 7 7 6 7 7 7 6 c 7 7 6 c c . . . . . . 
. . . . . . . . c c c 6 7 7 7 c 6 7 7 7 6 c c 6 . . . . . . . . 
. . . . . . . . . . . c c 7 7 c 6 7 7 6 6 . . . . . . . . . . . 
. . . . . . . . . . . . . 6 c 6 6 6 6 . . . . . . . . . . . . . 
. . . . . . . . . . . . f f e e e e f . . . . . . . . . . . . . 
. . . . . . . . . . f f e e e e e e e e f . . . . . . . . . . . 
. . . . . . . . . . . . . f e e e f f e . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . f e f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.vy = 50
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(0, 3)
    if (gap == 0) {
        topimage = img`
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f f f f f f f f f f f f f f f c c c c c c c c c c a a a a a a a a a a a f f f f f f f f f f f f f f . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c a c c c c c c a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c a c c c c c c a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c a a c c c c c a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c a c c c c a a a c c c a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c a c c c c a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c a a c c c a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c a a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c a c c c a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c a a a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a c c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a c c c c c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c f f f f f f f f f c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f . . . . . . . f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f a a a c c c c a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f a a a c c c c c c c c a a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c a a a a a a a c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c a c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c c c a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a a c c c c c c a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c a a a c c c c a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c a a a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c a a a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a c c c c a a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c a c c c c c a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c a c c c c c a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a c c c c a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c a a a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c a a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c a c c c c c c c c c c a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c a a a a c c c c c c c c c a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a c c c c c c c a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a a a a c c c c a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a a a a a a a a a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a a a a a a c c a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
`
    } else if (gap == 1) {
        topimage = sprites.duck.log7
        bottomImage = sprites.duck.log2
    } else if (gap == 2) {
        topimage = sprites.duck.log6
        bottomImage = sprites.duck.log2
    } else {
        topimage = sprites.duck.log8
        bottomImage = sprites.duck.log1
    }
    projectile = sprites.createProjectileFromSide(topimage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
})
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
game.onUpdate(function () {
	
})
game.onUpdate(function () {
    if (mySprite.bottom > 120 || mySprite.top < 0) {
        game.over(false)
    }
})
