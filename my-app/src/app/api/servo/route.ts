import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url);
  const angle = searchParams.get('angle');

  if (!angle || isNaN(Number(angle)) || Number(angle) < 0 || Number(angle) > 180) {
    return NextResponse.json({ error: 'Invalid angle. Must be between 0 and 180.' }, { status: 400 });
  }

  // Execute the Python script with the desired angle
  exec(`python3 /home/pi/my-app/servo_control.py ${angle}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return NextResponse.json({ error: 'Failed to move servo.' }, { status: 500 });
    }
    console.log(`Servo moved: ${stdout}`);
  });

  return NextResponse.json({ message: `Servo moved to ${angle} degrees.` });
}
