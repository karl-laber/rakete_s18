function Start_Rakete () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Countdown()
    Start_Rakete()
})
function Countdown () {
    basic.showNumber(3)
    basic.pause(Tempo)
    basic.showNumber(2)
    basic.pause(Tempo)
    basic.showNumber(1)
    basic.pause(Tempo)
    basic.showNumber(0)
    basic.pause(Tempo)
}
let Tempo = 0
Tempo = 1000
