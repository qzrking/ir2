let READ = 0
let IR = 0
basic.forever(function () {
    basic.showNumber(IR)
    READ = pins.analogReadPin(AnalogPin.P0)
    if (IR != READ) {
        IR = READ
    }
})
