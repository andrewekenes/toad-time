scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTilemap(tilemap`level2`)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        goomba = sprites.create(img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f f e e e e f f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f 1 e e 1 f 1 e e e . 
            . e e e 1 1 1 e e 1 1 1 e e e . 
            . e e e e e e e e e e e e e e . 
            . e e e f f f f f f f f e e e . 
            . e e e f e e e e e e f e e e . 
            . . e e e e e e e e e e e e . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . f f f f d d f f f f . . . 
            . . . f f f f . . f f f f . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(goomba, value)
        animation.runImageAnimation(
        goomba,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f f e e e e f f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f 1 e e 1 f 1 e e e . 
            . e e e 1 1 1 e e 1 1 1 e e e . 
            . e e e e e e e e e e e e e e . 
            . e e e f f f f f f f f e e e . 
            . e e e f e e e e e e f e e e . 
            . . e e e e e e e e e e e e . . 
            . . . . d d d d d d d d . . . . 
            . . . f f f f d d d d . . . . . 
            . . . f f f f d d f f f f . . . 
            . . . . . . . . . f f f f . . . 
            `,img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f f e e e e f f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f 1 e e 1 f 1 e e e . 
            . e e e 1 1 1 e e 1 1 1 e e e . 
            . e e e e e e e e e e e e e e . 
            . e e e f f f f f f f f e e e . 
            . e e e f e e e e e e f e e e . 
            . . e e e e e e e e e e e e . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d d d f f f f . . . 
            . . . f f f f d d f f f f . . . 
            . . . f f f f . . . . . . . . . 
            `],
        120,
        true
        )
        goomba.ay = 350
        goomba.vx = -50
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
controller.up.onEvent(ControllerButtonEvent.Repeated, function () {
    tripple_jump()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    jump()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.vx == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 1 2 1 2 2 . . . . . 
            . . . 2 1 2 2 2 2 2 1 2 . . . . 
            . . . 2 2 2 2 1 2 2 2 2 . . . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 5 d . . . . . . . 
            . . . . . . 8 5 d d . . . . . . 
            . . . . . d 8 5 d d d . . . . . 
            . . . . . d 5 5 1 1 d . . . . . 
            . . . . . d 1 1 1 1 d . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . e e e . . e e e . . . . 
            . . . . e e e . . e e e . . . . 
            `],
        500,
        false
        )
        slide = 0
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . 2 2 1 2 1 2 2 . . . . 
            . . . . 2 1 2 2 2 2 2 1 2 . . . 
            . . . . 2 2 2 2 1 2 2 2 2 . . . 
            . . . . 2 2 1 2 2 2 1 2 2 . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . f d f d d d . . . . . 
            . . . . . f d f d d d . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . d 5 . . . . . . . 
            . . . . . . d d 5 8 . . . . . . 
            . . . . . d d d 5 8 d . . . . . 
            . . . . . d 1 1 5 5 d . . . . . 
            . . . . . d 1 1 1 1 d . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . e e e . . e e e . . . . 
            . . . . e e e . . e e e . . . . 
            `],
        500,
        false
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.vx == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 1 2 1 2 2 . . . . . 
            . . . 2 1 2 2 2 2 2 1 2 . . . . 
            . . . 2 2 2 2 1 2 2 2 2 . . . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 5 d . . . . . . . 
            . . . . . . 8 5 d d . . . . . . 
            . . . . . d 8 5 d d d . . . . . 
            . . . . . d 5 5 1 1 d . . . . . 
            . . . . . d 1 1 1 1 d . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . e e e . . e e e . . . . 
            . . . . e e e . . e e e . . . . 
            `],
        500,
        false
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite.vx == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 1 2 1 2 2 . . . . . 
            . . . 2 1 2 2 2 2 2 1 2 . . . . 
            . . . 2 2 2 2 1 2 2 2 2 . . . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 5 d . . . . . . . 
            . . . . . . 8 5 d d . . . . . . 
            . . . . . d 8 5 d d d . . . . . 
            . . . . . d 5 5 1 1 d . . . . . 
            . . . . . d 1 1 1 1 d . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . e e e . . e e e . . . . 
            . . . . e e e . . e e e . . . . 
            `],
        500,
        false
        )
    }
})
function tripple_jump () {
    if (mySprite.vy == 0) {
        if (Jump == 1) {
            Jump = 0
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . . . d 8 5 d d d . . . . . 
                . . . . . d 5 5 1 1 d . . . . . 
                . . . . . d 1 1 1 1 d . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . e e e . . e e e . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . d d d 8 5 d d d d d . . . 
                . . . . . . 5 5 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . e e e . . e e e . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . d d d 8 5 d d d d d . . . 
                . . . . . . 5 5 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . d . . . 5 d . . . d . . . 
                . . . . d . 8 5 d d . d . . . . 
                . . . . . d 8 5 d d d . . . . . 
                . . . . . . 5 5 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . d d d 8 5 d d d d d . . . 
                . . . . . . 5 5 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            180,
            false
            )
            mySprite.vy = -180
            jump_again = 1
        }
    }
    if (mySprite.vy == 0) {
        if (jump_again == 1) {
            if (mySprite.vx != 0) {
                Jump = 0
                animation.runImageAnimation(
                mySprite,
                assets.animation`tripple jump`,
                150,
                true
                )
                mySprite.vy = -190
                jump_again = 1
            } else {
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . 2 2 2 2 2 . . . . . . 
                    . . . . 2 2 1 2 1 2 2 . . . . . 
                    . . . 2 1 2 2 2 2 2 1 2 . . . . 
                    . . . 2 2 2 2 1 2 2 2 2 . . . . 
                    . . . 2 2 1 2 2 2 1 2 2 . . . . 
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . . . . d d d f d f . . . . . 
                    . . . . . d d d f d f . . . . . 
                    . . . . . d d d d d d . . . . . 
                    . . . . . . d d d d . . . . . . 
                    . . . . . . . 5 d . . . . . . . 
                    . . . . . . 8 5 d d . . . . . . 
                    . . . . . d 8 5 d d d . . . . . 
                    . . . . . d 5 5 1 1 d . . . . . 
                    . . . . . d 1 1 1 1 d . . . . . 
                    . . . . . . 1 1 1 1 . . . . . . 
                    . . . . e e e . . e e e . . . . 
                    . . . . e e e . . e e e . . . . 
                    `],
                100,
                false
                )
            }
        }
    }
}
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
    }
    if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 1 2 1 2 2 . . . . . 
            . . . 2 1 2 2 2 2 2 1 2 . . . . 
            . . . 2 2 2 2 1 2 2 2 2 . . . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d f d f . . . . . 
            . . . . . d d d d d d . . . . . 
            . . . . . . d d d d . . . . . . 
            . . . . . . . 5 d . . . . . . . 
            . . . . . . 8 5 d d . . . . . . 
            . . . . . d 8 5 d d d . . . . . 
            . . . . . d 5 5 1 1 d . . . . . 
            . . . . . d 1 1 1 1 d . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . e e e . . e e e . . . . 
            . . . . e e e . . e e e . . . . 
            `],
        500,
        false
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0) {
        if (mySprite.vy == 0) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . . . d 8 5 d d d . . . . . 
                . . . . d . 5 5 1 1 . d . . . . 
                . . . . d . 1 1 1 1 . d . . . . 
                . . . . e e e 1 1 e e e . . . . 
                . . . . e e e . . e e e . . . . 
                `],
            500,
            false
            )
        }
    } else {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . 2 2 2 2 2 . . . . . 
                . . 2 2 1 2 1 2 2 . . . . 
                . 2 1 2 2 2 2 2 1 2 . . . 
                . 2 2 2 2 1 2 2 2 2 . . . 
                . 2 2 1 2 2 2 1 2 2 . . . 
                . . 2 2 2 2 2 2 2 . . . . 
                . . . d d d f d f . . . . 
                . . . d d d f d f . . . . 
                . . . d d d d d d . . . . 
                . . . . d d d d . . . . . 
                . . . d 5 5 1 1 d . . . . 
                . . d 5 8 8 d d b b c c c 
                d d . 5 8 8 d d 1 e e e c 
                d d . . 5 5 1 1 1 e e e . 
                `],
            500,
            false
            )
            slide = 1
        }
        if (controller.left.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . 2 2 2 2 2 . . . 
                . . . . 2 2 1 2 1 2 2 . . 
                . . . 2 1 2 2 2 2 2 1 2 . 
                . . . 2 2 2 2 1 2 2 2 2 . 
                . . . 2 2 1 2 2 2 1 2 2 . 
                . . . . 2 2 2 2 2 2 2 . . 
                . . . . f d f d d d . . . 
                . . . . f d f d d d . . . 
                . . . . d d d d d d . . . 
                . . . . . d d d d . . . . 
                . . . . d 1 1 5 5 d . . . 
                c c c b b d d 8 8 5 d . . 
                c e e e 1 d d 8 8 5 . d d 
                . e e e 1 1 1 5 5 . . d d 
                `],
            500,
            false
            )
            slide = 1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    tripple_jump()
})
function jump () {
    if (mySprite.vy == 0) {
        if (controller.down.isPressed()) {
            animation.runImageAnimation(
            mySprite,
            assets.animation`complete`,
            500,
            false
            )
        } else {
            mySprite.vy = -150
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . d . . . . 
                . . . . . . 8 5 d d . d . . . . 
                . . . . d d 8 5 d d d . . . . . 
                . . . . d . 5 5 1 1 . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . 1 1 1 e e e . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . e e e . . . . . . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . . . d d 5 d d d . . . . . 
                . . . . . d 5 5 1 1 . d . . . . 
                . . . . . . 1 1 1 1 . d . . . . 
                . . . . e e e 1 1 1 . . . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . . . . . . e e e . . . . 
                `,img`
                . . . . . 2 2 2 2 2 . . . . . . 
                . . . . 2 2 1 2 1 2 2 . . . . . 
                . . . 2 1 2 2 2 2 2 1 2 . . . . 
                . . . 2 2 2 2 1 2 2 2 2 . . . . 
                . . . 2 2 1 2 2 2 1 2 2 . . . . 
                . . . . 2 2 2 2 2 2 2 . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d f d f . . . . . 
                . . . . . d d d d d d . . . . . 
                . . . . . . d d d d . . . . . . 
                . . . . . . . 5 d . . . . . . . 
                . . . . . . 8 5 d d . . . . . . 
                . . . . . d 8 5 d d d . . . . . 
                . . . . . d 5 5 1 1 d . . . . . 
                . . . . . d 1 1 1 1 d . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . e e e . . e e e . . . . 
                . . . . e e e . . e e e . . . . 
                `],
            400,
            false
            )
            pause(200)
            Jump = 1
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (slide == 0) {
        if (mySprite.vy > otherSprite.vy) {
            otherSprite.vx = 0
            animation.runImageAnimation(
            otherSprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . e f e e e e f e . . . . 
                . . . e e 1 e e e e 1 e e . . . 
                . . . . f f d d d d f f . . . . 
                `],
            500,
            false
            )
            pause(500)
            otherSprite.destroy()
        } else {
            game.over(false)
        }
    }
    if (slide == 1) {
        animation.runImageAnimation(
        otherSprite,
        [img`
            . . . . . . e e e e . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e e e e e e e e e e . . . 
            . . e f f f e e e e f f f e . . 
            . e e e 1 f e e e e f 1 e e e . 
            . e e e 1 f 1 e e 1 f 1 e e e . 
            . e e e 1 1 1 e e 1 1 1 e e e . 
            . e e e e e e e e e e e e e e . 
            . e e e f f f f f f f f e e e . 
            . e e e f e e e e e e f e e e . 
            . . e e e e e e e e e e e e . . 
            . . . . d d d d d d d d . . . . 
            . . . . . d d d d d d . . . . . 
            . . . f f f f d d f f f f . . . 
            . . . f f f f . . f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            f f . . e e e e e e e f e . . . 
            f f . d e f f e 1 1 1 f e e . . 
            f f d d e e f e 1 f f f e e e . 
            f f d d e e f e 1 1 e e e e e e 
            . d d d e e f e e e e e e e e e 
            . d d d e e f e e e e e e e e e 
            f f d d e e f e 1 1 e e e e e e 
            f f d d e e f e 1 f f f e e e . 
            f f . d e f f e 1 1 1 f e e . . 
            f f . . e e e e e e e f e . . . 
            . . . . e e e e e e e e . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f f . . f f f f . . . 
            . . . f f f f d d f f f f . . . 
            . . . . . d d d d d d . . . . . 
            . . . . d d d d d d d d . . . . 
            . . e e e e e e e e e e e e . . 
            . e e e f e e e e e e f e e e . 
            . e e e f f f f f f f f e e e . 
            . e e e e e e e e e e e e e e . 
            . e e e 1 1 1 e e 1 1 1 e e e . 
            . e e e 1 f 1 e e 1 f 1 e e e . 
            . e e e 1 f e e e e f 1 e e e . 
            . . e f f f e e e e f f f e . . 
            . . . e e e e e e e e e e . . . 
            . . . . e e e e e e e e . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . e e e e . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . e e e e e e e e . . . . 
            . . . e f e e e e e e e . . f f 
            . . e e f 1 1 1 e f f e d . f f 
            . e e e f f f 1 e f e e d d f f 
            e e e e e e 1 1 e f e e d d f f 
            e e e e e e e e e f e e d d d . 
            e e e e e e e e e f e e d d d . 
            e e e e e e 1 1 e f e e d d f f 
            . e e e f f f 1 e f e e d d f f 
            . . e e f 1 1 1 e f f e d . f f 
            . . . e f e e e e e e e . . f f 
            . . . . e e e e e e e e . . . . 
            . . . . . e e e e e e . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        130,
        true
        )
        otherSprite.vy = -100
        otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        pause(1000)
        slide = 0
    }
})
let jump_again = 0
let Jump = 0
let goomba: Sprite = null
let slide = 0
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`idle1`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
slide = 0
tiles.setTilemap(tilemap`level1`)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
    goomba = sprites.create(img`
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e f f f e e e e f f f e . . 
        . e e e 1 f e e e e f 1 e e e . 
        . e e e 1 f 1 e e 1 f 1 e e e . 
        . e e e 1 1 1 e e 1 1 1 e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e f f f f f f f f e e e . 
        . e e e f e e e e e e f e e e . 
        . . e e e e e e e e e e e e . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d d d . . . . . 
        . . . f f f f d d f f f f . . . 
        . . . f f f f . . f f f f . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(goomba, value)
    animation.runImageAnimation(
    goomba,
    [img`
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e f f f e e e e f f f e . . 
        . e e e 1 f e e e e f 1 e e e . 
        . e e e 1 f 1 e e 1 f 1 e e e . 
        . e e e 1 1 1 e e 1 1 1 e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e f f f f f f f f e e e . 
        . e e e f e e e e e e f e e e . 
        . . e e e e e e e e e e e e . . 
        . . . . d d d d d d d d . . . . 
        . . . f f f f d d d d . . . . . 
        . . . f f f f d d f f f f . . . 
        . . . . . . . . . f f f f . . . 
        `,img`
        . . . . . . e e e e . . . . . . 
        . . . . . e e e e e e . . . . . 
        . . . . e e e e e e e e . . . . 
        . . . e e e e e e e e e e . . . 
        . . e f f f e e e e f f f e . . 
        . e e e 1 f e e e e f 1 e e e . 
        . e e e 1 f 1 e e 1 f 1 e e e . 
        . e e e 1 1 1 e e 1 1 1 e e e . 
        . e e e e e e e e e e e e e e . 
        . e e e f f f f f f f f e e e . 
        . e e e f e e e e e e f e e e . 
        . . e e e e e e e e e e e e . . 
        . . . . d d d d d d d d . . . . 
        . . . . . d d d d f f f f . . . 
        . . . f f f f d d f f f f . . . 
        . . . f f f f . . . . . . . . . 
        `],
    120,
    true
    )
    goomba.ay = 350
    goomba.vx = -50
    tiles.setTileAt(value, assets.tile`transparency16`)
}
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Left)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ..22222.........
            .2212122........
            212222212.......
            222212222.......
            221222122.......
            .2222222........
            ..dddfdf........
            ..dddfdf........
            ..dddddd........
            ...dddd.........
            d...5d..........
            .d.85dd.........
            ..d85ddd........
            ...5511d........
            ...1111d........
            .ee1ee1.........
            .ee.ee..........
            .ee.ee..........
            ................
            ................
            ................
            ................
            `,img`
            .....22222......
            ....2212122.....
            ...212222212....
            ...222212222....
            ...221222122....
            ....2222222.....
            .....dddfdf.....
            .....dddfdf.....
            .....dddddd.....
            ......dddd......
            ...d...5d.......
            ....d.85dd......
            .....d85ddd.....
            ......5511d.....
            ......1111d.....
            ....ee1ee1......
            ....ee.ee.......
            ....ee.ee.......
            ................
            ................
            ................
            ................
            `],
        200,
        true
        )
        if (controller.A.isPressed()) {
            mySprite.vy = -100
        }
        if (controller.up.isPressed()) {
            mySprite.vy = -100
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        animation.runImageAnimation(
        mySprite,
        [img`
            .........22222..
            ........2212122.
            .......212222212
            .......222212222
            .......221222122
            ........2222222.
            ........fdfddd..
            ........fdfddd..
            ........dddddd..
            .........dddd...
            ..........d5...d
            .........dd58.d.
            ........ddd58d..
            ........d1155...
            ........d1111...
            .........1ee1ee.
            ..........ee.ee.
            ..........ee.ee.
            ................
            ................
            ................
            ................
            `,img`
            ......22222.....
            .....2212122....
            ....212222212...
            ....222212222...
            ....221222122...
            .....2222222....
            .....fdfddd.....
            .....fdfddd.....
            .....dddddd.....
            ......dddd......
            .......d5...d...
            ......dd58.d....
            .....ddd58d.....
            .....d1155......
            .....d1111......
            ......1ee1ee....
            .......ee.ee....
            .......ee.ee....
            ................
            ................
            ................
            ................
            `],
        200,
        true
        )
        if (controller.A.isPressed()) {
            mySprite.vy = -100
        }
        if (controller.up.isPressed()) {
            mySprite.vy = -100
        }
    }
})
