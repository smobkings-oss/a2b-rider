"use client";

import { useState } from "react";

const TOLEDO_LOCATIONS = [
  "Toledo Express Airport",
  "Downtown Toledo",
  "Fifth Third Field",
  "University of Toledo",
  "Perrysburg",
  "Maumee",
  "Sylvania",
  "Findlay",
  "Fremont",
];

export default function Home() {
  const [pickup, setPickup] = useState("Current location");
  const [dropoff, setDropoff] = useState("");
  const [rideType, setRideType] = useState<"instant" | "scheduled">("instant");
  const [scheduleTime, setScheduleTime] = useState("");
  const [estimate, setEstimate] = useState<number | null>(null);
  const [requested, setRequested] = useState(false);

  const calculateEstimate = () => {
    if (!dropoff) return;
    // Mock pricing: base $8 + random distance factor
    const base = 8;
    const distanceFactor = Math.random() * 25 + 5;
    const surge = rideType === "instant" ? 1.1 : 1.0;
    setEstimate(Math.round((base + distanceFactor) * surge * 100) / 100);
  };

  const handleRequest = () => {
    if (!dropoff || (rideType === "scheduled" && !scheduleTime)) return;
    calculateEstimate();
    setRequested(true);
  };

  if (requested && estimate) {
    return (
      <div className="max-w-md mx-auto px-4 py-8">
        <div className="bg-zinc-900 border border-gold/40 rounded-2xl p-6 text-center space-y-4">
          <div className="text-gold text-5xl">✓</div>
          <h2 className="text-2xl font-bold">Ride Requested</h2>
          <p className="text-zinc-400">
            {rideType === "instant" ? "Looking for a nearby driver..." : `Scheduled for ${new Date(scheduleTime).toLocaleString()}`}
          </p>
          <div className="bg-black/50 rounded-xl p-4 text-left space-y-2">
            <p><span className="text-zinc-500">From:</span> {pickup}</p>
            <p><span className="text-zinc-500">To:</span> {dropoff}</p>
            <p className="text-gold text-xl font-semibold">${estimate.toFixed(2)}</p>
          </div>
          <p className="text-sm text-zinc-500">
            A Tesla Navigator will be matched shortly. You'll receive updates here.
          </p>
          <button
            onClick={() => { setRequested(false); setEstimate(null); }}
            className="w-full bg-gold text-black font-semibold py-3 rounded-xl hover:bg-gold-light transition"
          >
            Book Another Ride
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      {/* Map Placeholder */}
      <div className="relative h-64 bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-gold/30 overflow-hidden mb-6 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,#d4af37_0%,transparent_50%)]" />
        <div className="text-center z-10">
          <div className="text-gold text-4xl mb-2">📍</div>
          <p className="text-sm text-zinc-400">Live map coming with Google Maps / Mapbox</p>
          <p className="text-xs text-zinc-600 mt-1">NW Ohio service area</p>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-gold/20 rounded-2xl p-5 space-y-4">
        <h1 className="text-xl font-bold">Where to?</h1>

        {/* Pickup */}
        <div>
          <label className="text-xs text-zinc-500 uppercase tracking-wide">Pickup</label>
          <input
            type="text"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="w-full mt-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-gold focus:outline-none"
            placeholder="Pickup location"
          />
        </div>

        {/* Dropoff */}
        <div>
          <label className="text-xs text-zinc-500 uppercase tracking-wide">Dropoff</label>
          <input
            type="text"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
            list="locations"
            className="w-full mt-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-gold focus:outline-none"
            placeholder="Where are you going?"
          />
          <datalist id="locations">
            {TOLEDO_LOCATIONS.map((loc) => (
              <option key={loc} value={loc} />
            ))}
          </datalist>
        </div>

        {/* Ride Type */}
        <div className="flex gap-2">
          <button
            onClick={() => setRideType("instant")}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              rideType === "instant"
                ? "bg-gold text-black"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            Instant
          </button>
          <button
            onClick={() => setRideType("scheduled")}
            className={`flex-1 py-3 rounded-xl font-medium transition ${
              rideType === "scheduled"
                ? "bg-gold text-black"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            Scheduled
          </button>
        </div>

        {/* Schedule Time */}
        {rideType === "scheduled" && (
          <div>
            <label className="text-xs text-zinc-500 uppercase tracking-wide">When</label>
            <input
              type="datetime-local"
              value={scheduleTime}
              onChange={(e) => setScheduleTime(e.target.value)}
              className="w-full mt-1 bg-black border border-zinc-700 rounded-xl px-4 py-3 focus:border-gold focus:outline-none [color-scheme:dark]"
            />
          </div>
        )}

        <button
          onClick={handleRequest}
          disabled={!dropoff || (rideType === "scheduled" && !scheduleTime)}
          className="w-full bg-gold text-black font-bold py-4 rounded-xl hover:bg-gold-light disabled:opacity-50 disabled:cursor-not-allowed transition text-lg"
        >
          {rideType === "instant" ? "Request Instant Ride" : "Schedule Ride"}
        </button>

        {estimate && !requested && (
          <p className="text-center text-gold">Estimated: ${estimate.toFixed(2)}</p>
        )}
      </div>

      <p className="text-center text-xs text-zinc-600 mt-6">
        Transparent pricing • Better pay for drivers • Local Tesla fleet
      </p>
    </div>
  );
}
