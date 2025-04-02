import RPi.GPIO as GPIO
import time
import sys

# Set the GPIO mode to BCM (Broadcom chip-specific numbering)
GPIO.setmode(GPIO.BCM)

# Define the GPIO pin that you want to use for the servo signal (e.g., GPIO 17)
SERVO_PIN = 18
GPIO.setup(SERVO_PIN, GPIO.OUT)

# Set the PWM frequency for the servo (usually 50Hz for most servos)
pwm = GPIO.PWM(SERVO_PIN, 50)
pwm.start(0)

def set_servo_angle(angle):
    # Servo expects a duty cycle between ~2.5 (0 degrees) and ~12.5 (180 degrees)
    duty = 2.5 + (angle / 18.0)  # Convert angle to duty cycle
    GPIO.output(SERVO_PIN, True)
    pwm.ChangeDutyCycle(duty)
    time.sleep(1)
    GPIO.output(SERVO_PIN, False)
    pwm.ChangeDutyCycle(0)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide a command (e.g., 'left', 'right', or angle 0-180)")
        sys.exit(1)

    command = sys.argv[1].lower()

    if command == "left":
        set_servo_angle(0)  # Move servo to 0 degrees
    elif command == "right":
        set_servo_angle(180)  # Move servo to 180 degrees
    else:
        try:
            angle = int(command)
            if 0 <= angle <= 180:
                set_servo_angle(angle)  # Move servo to the specified angle
            else:
                print("Angle must be between 0 and 180")
        except ValueError:
            print("Invalid command. Use 'left', 'right', or a number between 0-180")

    # Cleanup the GPIO
    pwm.stop()
    GPIO.cleanup()
