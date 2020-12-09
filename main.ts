let player_1 = 0
let player_2 = 0
input.onButtonPressed(Button.A, function () {
    if (player_1 < 20 && player_2 < 20) {
        player_1 += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    player_1 = 0
    player_2 = 0
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    if (player_1 < 20 && player_2 < 20) {
        player_2 += 1
    }
})
basic.forever(function () {
    if (player_1 == 20) {
        basic.showNumber(1)
    } else if (player_2 == 20) {
        basic.showNumber(2)
    } else {
        led.plot(0, 4 - Math.map(player_1, 4, 20, 0, 4))
        led.plot(4, 4 - Math.map(player_2, 4, 20, 0, 4))
    }
})
