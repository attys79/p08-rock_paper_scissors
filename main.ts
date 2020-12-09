let handshape = 0
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . # . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    for (let i = 0; i <= 2; i++) {
        basic.showNumber(i + 1)
        basic.pause(1000)
    }
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
