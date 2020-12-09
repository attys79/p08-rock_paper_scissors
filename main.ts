let handshape = 0
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    for (let i = 0; i <= 9; i++) {
        images.createImage(`
            . # . . .
            # . # . .
            . . # . .
            . . # # #
            . # . # .
            `).showImage(-5 + i)
        images.createImage(`
            # # . . .
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            `).showImage(-5 + i)
    }
    basic.pause(500)
    handshape = randint(0, 2)
    if (handshape == 0) {
        basic.showString("R")
    } else if (handshape == 1) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
basic.forever(function () {
	
})
