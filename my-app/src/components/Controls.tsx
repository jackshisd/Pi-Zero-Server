"use client";

import { useState } from "react";

export default function Controls() {
  const [ledStatus, setLedStatus] = useState("OFF");

  const turnOnLed = async () => {
    const response = await fetch("/api/led?action=on", { method: "PUT" });
    if (response.ok) {
      setLedStatus("ON");
    } else {
      console.error("Failed to turn on LED");
    }
  };

  const turnOffLed = async () => {
    const response = await fetch("/api/led?action=off", { method: "PUT" });
    if (response.ok) {
      setLedStatus("OFF");
    } else {
      console.error("Failed to turn off LED");
    }
  };

  return (
    <div className="w-full max-w-md p-4 bg-card rounded-md shadow-md">
      <h3 className="text-lg font-semibold text-foreground mb-2">LED Control</h3>
      <button onClick={turnOnLed} className="bg-green-500 text-white px-4 py-2 rounded-md m-2">
        Turn ON LED
      </button>
      <button onClick={turnOffLed} className="bg-red-500 text-white px-4 py-2 rounded-md m-2">
        Turn OFF LED
      </button>
      <div className="text-center text-sm text-foreground font-medium mt-2">
        Current Status: {ledStatus}
      </div>
    </div>
  );
}
