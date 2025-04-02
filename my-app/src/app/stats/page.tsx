// src/app/stats/page.tsx

import { getSystemDetails } from "@/lib/system";

export default async function Stats() {
  const systemInfo = await getSystemDetails();

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Raspberry Pi System Information</h1>

      <div className="bg-white shadow rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">System Information</h2>

        <div className="space-y-2">
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">Hostname:</span>
            <span>{systemInfo.os.hostname()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">Platform:</span>
            <span>{systemInfo.os.platform()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">Architecture:</span>
            <span>{systemInfo.os.arch()}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span className="font-medium text-gray-700">CPU Temperature:</span>
            <span className="text-gray-800">
              {systemInfo.cpuTemp !== null ? `${systemInfo.cpuTemp.toFixed(1)}°C` : "N/A"}
            </span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-4">CPU Usage</h3>
        {systemInfo.cpuUsage.map((usage, index) => (
          <div key={index} className="flex justify-between text-lg">
            <span>Core {index}:</span>
            <span>{usage}%</span>
          </div>
        ))}

        <h3 className="text-lg font-semibold mt-4">Memory Usage</h3>
        <div className="flex justify-between text-lg">
          <span>Used:</span>
          <span>{systemInfo.memoryUsage.used.toFixed(2)} GB / {systemInfo.memoryUsage.total.toFixed(2)} GB</span>
        </div>
      </div>
    </main>
  );
}
