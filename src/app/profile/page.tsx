export default function ProfilePage() {
  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-zinc-900 border border-gold/20 rounded-2xl p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-2xl">👤</div>
          <div>
            <p className="font-semibold text-lg">Rider</p>
            <p className="text-sm text-zinc-500">NW Ohio</p>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-4 space-y-2 text-sm">
          <p><span className="text-zinc-500">Email:</span> rider@example.com</p>
          <p><span className="text-zinc-500">Phone:</span> (419) 555-0123</p>
          <p><span className="text-zinc-500">Payment:</span> •••• 4242</p>
        </div>
        <button className="w-full bg-zinc-800 hover:bg-zinc-700 py-3 rounded-xl transition">
          Manage Payment Methods
        </button>
        <button className="w-full border border-gold/40 text-gold hover:bg-gold/10 py-3 rounded-xl transition">
          Sign Out
        </button>
      </div>
      <p className="text-center text-xs text-zinc-600 mt-8">
        Connect Supabase Auth + Stripe for production
      </p>
    </div>
  );
}
