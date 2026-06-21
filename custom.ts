//% color="#0fbc11" icon="\uf0c0" block="Chess"
namespace myCustomExtension {

    // --- FUNCTION 1 ---
    //% block="add diagonal movement of range $range2 to $otherSprite2 "
    export function add_diagonal_movement_of_range(range2: number, otherSprite2: Sprite, upward: boolean) {
        let bishop_range = range2
        for (let index = 0; index < range2; index++) {
            if (upward == true) {
                add_point_square(otherSprite2, 15 * bishop_range, 15 * bishop_range, true, true)
                add_point_square(otherSprite2, -15 * bishop_range, 15 * bishop_range, true, true)
            } else {
                add_point_square(otherSprite2, -15 * bishop_range, -15 * bishop_range, true, true)
                add_point_square(otherSprite2, 15 * bishop_range, -15 * bishop_range, true, true)
            }
            bishop_range += -1
        }
    }

    // --- FUNCTION 2 ---
    //% block="add move indicator to $sprite3 of kind $SpriteKind x $x y$y"
    export function add_point_square(sprite3: Sprite, x: number, y: number, bool: boolean, bool2: boolean) {
        let point = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.$)
        point.x = sprite3.x + x
        point.y = sprite3.y - y
        sprites.setDataBoolean(point, "can capture", bool)
        sprites.setDataBoolean(point, "can move", bool2)
    }

    // --- FUNCTION 3 ---
    //% block="shake camera for $duration ms"
    export function shakeCamera(duration: number) {
        scene.cameraShake(4, duration)
    }
}
