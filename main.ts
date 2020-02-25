controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.vy = 50
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
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
let question = game.askForString("do you want a helicopter or a plane")
if (question == "helicopter") {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 3 3 3 3 . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 f f f f f . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f . . . . . . . 
3 3 3 3 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f . . . . . . . 
. . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    mySprite.vy = 50
} else {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . 
. . . . . . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 3 3 3 3 . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 f f f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 f f f f f . . . . . . . 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f f . . . . . . . 
3 . 3 . 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 f f f . . . . . . . 
3 3 3 3 3 . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f f . . . . . . . 
. . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
}
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
        topimage = img`
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f c c c a a a a a a a a a a a a c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c a a a a a a a a a a a a a a c c c a a a a a a a c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c c f . . . . . . . . . 
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
. . . . . . . . . . . . . . . . . . . . . . f c c c c a a a a c a a a a c c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c a a a a a a a a a c c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c a a a a a a a c c a a a a c c c c a a a f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c a a a c a a a a c a a a a c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c a a a a a a a a a c a a a a a c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c a a a a a a a a a a a a a a a a a c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c a a a a c a a a a a a a a a c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c a a a a c a a a a c a a a a c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c a a a a a c a a a a a a a a c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c a a a a c a a a a a a a a a c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c a a a a c a a a a a a a a c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c a a a a a c a a a c a a a c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c a a a a c c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c a a a a c c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c a a a a a c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c a a a a c c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a c c c c c c c c f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
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
    } else if (gap == 2) {
        topimage = img`
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . 
. . . . . . . . f c c a a a a c c c c a a c c c c c c c c c c a a a a a a c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c a a a a a a a a c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c a c c a a a a a a a c c a a a a a a a c c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c a c c c a c c c c a a a a a a a a a a c c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c a c c c c a a c c c c c c c a a a a a a c c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c a c c c c c a a c c c c c a a a a a a a c c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f c c c c c c c c c c c c c a c c c c c c c a a c c c a a a a a a a a c c c c c c c c c c c c c c f . . . . . . . . . 
. . . . . . . . f f f f f f f f f f f f f f f a c c c c c c c c a a a a a a a a a a a a f f f f f f f f f f f f f f . . . . . . . . . 
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
. . . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . . . . . . 
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
    } else {
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
. . . . . . . . . . . . . . . . . . . . . f f f f f f f f f f f f f f f f f f f f f f f f f f f f f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c a a a a a c c c c c c c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c a a a a a a a a a a a c c c c c c c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c a a a a a a a a a a a a a a a a a c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c a a a a a a a a a a a a a a a a a a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c a a a a a a a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c a a a a a a a a c a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c a a a a a a a a c c c c c a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a a a a a a c c c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a a a a a a a a c c c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c a a a a a a a a a a a a c c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c a a a a c a a a a a a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c a a a a a a a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c a a a a a a a a a a a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a a a a a a a a c a a a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a a a a a a a a a c c a a a f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c a a a a a a a a a c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c a a a a a a a a c c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c a a a a c a a a a c c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c a a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c a a a a a a a a a c c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c a a a a c a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c c c c c c a a a a a a a a c f . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f c c c c c c c c c c c c c a a c c c c a a a a a a c c f . . . . . . . . . . . . . . . . . 
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
    }
    if (info.score() < 10) {
        projectile = sprites.createProjectileFromSide(topimage, -45, 0)
        projectile = sprites.createProjectileFromSide(topimage, -45, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
        projectile.bottom = scene.screenHeight()
    }
})
game.onUpdateInterval(1500, function () {
    if (info.score() >= 10) {
        if (info.score() < 20) {
            projectile = sprites.createProjectileFromSide(topimage, -77, 0)
            projectile.top = 0
            projectile = sprites.createProjectileFromSide(bottomImage, -77, 0)
            projectile.bottom = scene.screenHeight()
        }
    }
    if (info.score() >= 20) {
        projectile = sprites.createProjectileFromSide(topimage, -90, 0)
        projectile.top = 0
        projectile = sprites.createProjectileFromSide(bottomImage, -90, 0)
        projectile.bottom = scene.screenHeight()
    }
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
