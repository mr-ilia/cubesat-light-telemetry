let callsign = "SBS-01"

bluetooth.startUartService()
input.lightLevel() // The first read wakes up the light sensor.

while (true) {
    basic.pause(1000)
    let light = input.lightLevel()
    bluetooth.uartWriteValue(callsign, light)
}
