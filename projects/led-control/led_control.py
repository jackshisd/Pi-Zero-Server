from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)

while True:
    for i in range(100):
        led.value = i/100
        sleep(0.01)
    for i in range(100):
        led.value = 1 - i/100
        sleep(0.01)
