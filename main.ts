let callsign = "SBS-01"

bluetooth.startUartService()
input.lightLevel() // The first read wakes up the light sensor.

while (true) {
    basic.pause(1000)
    bluetooth.uartWriteValue(callsign, input.lightLevel())
}
