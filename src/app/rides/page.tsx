export default function RidesPage() {
  const mockRides = [
    { id: 1, from: "Downtown Toledo", to: "Toledo Express Airport", date: "Today, 2:30 PM", status: "Completed", price: 32.50 },
    { id: 2, from: "University of Toledo", to: "Perrysburg", date: "Tomorrow, 9:00 AM", status: "Scheduled", price: 18.75 },
    { id: 3, from: "Fifth Third Field", to: "Maumee", date: "Oct 12, 7:15 PM", status: "Completed", price: 22.00 },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Rides</h1>
      <div className="space-y-3">
        {mockRides.map((ride) => (
          <div key={ride.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 hover:border-gold/40 transition">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{ride.from} → {ride.to}</p>
                <p className="text-sm text-zinc-500 mt-1">{ride.date}</p>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  ride.status === "Completed" ? "bg-green-900/50 text-green-400" : "bg-gold/20 text-gold"
                }`}>
                  {ride.status}
                </span>
                <p className="text-gold font-semibold mt-1">${ride.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {mockRides.length === 0 && (
        <p className="text-center text-zinc-500 py-12">No rides yet. Book your first hop!</p>
      )}
    </div>
  );
}
