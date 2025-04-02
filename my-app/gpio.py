import sys
import RPi.GPIO as GPIO
import time

# Define the GPIO pin number for the LED (set to 17)
LED_PIN = 17

# Setup GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)
GPIO.setup(LED_PIN, GPIO.OUT)

# Create a global PWM instance, but only start it when brightness is set
pwm = None

# Function to turn the LED on (no PWM, fully on)
def turn_on():
    global pwm
    if pwm:
        pwm.stop()  # Stop any ongoing PWM when turning fully on
    GPIO.output(LED_PIN, GPIO.HIGH)
    print("LED turned on")

# Function to turn the LED off
def turn_off():
    global pwm
    if pwm:
        pwm.stop()  # Stop any ongoing PWM when turning off
    GPIO.output(LED_PIN, GPIO.LOW)
    print("LED turned off")

# Function to set the brightness of the LED using PWM
def set_brightness(brightness):
    global pwm
    brightness = int(brightness)
    if 0 <= brightness <= 100:
        if pwm is None:
            pwm = GPIO.PWM(LED_PIN, 1000)  # Create PWM instance with 1kHz frequency
            pwm.start(0)  # Start PWM with 0% duty cycle
        pwm.ChangeDutyCycle(brightness)  # Set duty cycle for brightness
        print(f"LED brightness set to {brightness}%")
    else:
        print("Brightness value should be between 0 and 100")

# Main program logic based on command line arguments
if __name__ == "__main__":
    command = sys.argv[1]

    if command == "turn_on":
        turn_on()
    elif command == "turn_off":
        turn_off()
    elif command == "set_brightness":
        brightness_value = sys.argv[2]
        set_brightness(brightness_value)
    else:
        print("Invalid command")

    # No need to clean up GPIO right away, so the LED state is maintained.
