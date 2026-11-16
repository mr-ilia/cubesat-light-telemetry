callsign = "SBS-01"

bluetooth.start_uart_service()
input.light_level()  # The first read wakes up the light sensor.

while True:
    basic.pause(1000)
    light = input.light_level()
    bluetooth.uart_write_value(callsign, light)
