import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0B1220] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1FE4FF]">
          CargoPilot
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          The World’s Fastest Secure Delivery Powered by Travelers
        </p>
        <button className="mt-6 px-6 py-3 rounded-lg bg-[#1FE4FF] text-black font-semibold hover:opacity-90 transition">
          Join the Waitlist
        </button>
      </header>

      {/* How it Works */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1FE4FF] mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div>
            <p className="text-4xl">📦</p>
            <h3 className="text-xl font-semibold mt-4">Post Parcel</h3>
            <p className="text-gray-400 mt-2">Create a request for your delivery</p>
          </div>
          <div>
            <p className="text-4xl">✈️</p>
            <h3 className="text-xl font-semibold mt-4">Matched with Traveler</h3>
            <p className="text-gray-400 mt-2">Get instantly matched with a trusted traveler</p>
          </div>
          <div>
            <p className="text-4xl">🏡</p>
            <h3 className="text-xl font-semibold mt-4">Delivered Same Day</h3>
            <p className="text-gray-400 mt-2">Fast & secure delivery to your doorstep</p>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1FE4FF] mb-12">
          Trust & Security
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-semibold">🔒 Escrow Payments</h3>
            <p className="text-gray-400 mt-2">Funds are held securely until delivery is confirmed</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🤖 AI Risk Detection</h3>
            <p className="text-gray-400 mt-2">AI scans parcels & users for fraud detection</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🛡️ Insurance</h3>
            <p className="text-gray-400 mt-2">Your parcels are protected with premium insurance</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-[#0F172A] text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} CargoPilot</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#" className="hover:text-[#1FE4FF]">About</a>
          <a href="#" className="hover:text-[#1FE4FF]">Terms</a>
          <a href="#" className="hover:text-[#1FE4FF]">Privacy</a>
          <a href="mailto:support@cargopilot.io" className="hover:text-[#1FE4FF]">Contact</a>
        </div>
      </footer>
    </div>
  );
}
