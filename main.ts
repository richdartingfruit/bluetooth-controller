bluetooth.onBluetoothConnected(function () {
    connected = 1
})
bluetooth.onBluetoothDisconnected(function () {
    connected = 0
})
input.onButtonPressed(Button.A, function () {
    if (connected) {
        bluetooth.uartWriteString("")
    }
})
let connected = 0
let str = ""
connected = 0
bluetooth.startUartService()
basic.forever(function () {
    if (connected == 1) {
        str = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        if (str == "B") {
            basic.showString("go")
        } else {
            basic.showString(str)
        }
    } else {
        basic.showIcon(IconNames.Fabulous)
    }
})
