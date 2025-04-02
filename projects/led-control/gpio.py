# gpio.py
from gpiozero import LED
import sys

led = LED(17)  # Initialize LED on pin 17

if __name__ == "__main__":
    action = sys.argv[1]
    if action == "turn_on":
        led.on()
        print("LED turned on")
    elif action == "turn_off":
        led.off()
        print("LED turned off")
    elif action == "set_brightness":
        brightness = float(sys.argv[2])
        led.value = brightness / 100  # Assuming brightness is given as 0-100%
        print(f"LED brightness set to {brightness}%")
    else:
        print("Invalid action")
