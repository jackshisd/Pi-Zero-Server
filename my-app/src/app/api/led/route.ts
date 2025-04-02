import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function PUT(req: Request) {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get('action');
    const brightness = searchParams.get('brightness');

    let command = '';

    if (action === 'on') {
        command = 'python3 /home/pi/my-app/gpio.py turn_on'; // Adjust path if necessary
    } else if (action === 'off') {
        command = 'python3 /home/pi/my-app/gpio.py turn_off'; // Adjust path if necessary
    } else if (action === 'brightness') {
        command = `python3 /home/pi/my-app/gpio.py set_brightness ${brightness}`; // Adjust path if necessary
    } else {
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${stderr}`);
                resolve(NextResponse.json({ error: 'Failed to control LED' }, { status: 500 }));
                return;
            }
            resolve(NextResponse.json({ stdout: stdout.trim() }, { status: 200 }));
        });
    });
}
