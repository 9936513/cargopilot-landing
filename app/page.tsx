import Image from "next/image";
import WaitlistForm from "../components/WaitlistForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1FE4FF]">
          CargoPilot
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
          The World’s Fastest Secure Delivery Powered by Travelers
        </p>
        <button className="mt-8 px-8 py-3 rounded-lg bg-[#1FE4FF] text-black font-semibold hover:opacity-90 transition">
          Join the Waitlist
        </button>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1FE4FF] mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <div>
            <p className="text-4xl mb-4">📦</p>
            <h3 className="text-xl font-semibold mb-2">Post Parcel</h3>
            <p className="text-gray-400">Create a request for your delivery</p>
          </div>
          <div>
            <p className="text-4xl mb-4">✈️</p>
            <h3 className="text-xl font-semibold mb-2">Matched with Traveler</h3>
            <p className="text-gray-400">
              Instantly matched with a trusted traveler
            </p>
          </div>
          <div>
            <p className="text-4xl mb-4">🏡</p>
            <h3 className="text-xl font-semibold mb-2">Delivered Same Day</h3>
            <p className="text-gray-400">
              Fast & secure delivery right to your doorstep
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1FE4FF] mb-12">
          Trust & Security
        </h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">💳 Escrow Payments</h3>
            <p className="text-gray-400">Funds released only when delivery is complete</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🤖 AI Risk Detection</h3>
            <p className="text-gray-400">Smart fraud & risk monitoring system</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">🛡 Insurance</h3>
            <p className="text-gray-400">Optional coverage for high-value items</p>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20 px-6 bg-[#0F172A] text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#1FE4FF] mb-6">
          Join the Waitlist
        </h2>
        <div className="max-w-md mx-auto">
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} CargoPilot</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-[#1FE4FF]">About</a>
          <a href="#" className="hover:text-[#1FE4FF]">Terms</a>
          <a href="#" className="hover:text-[#1FE4FF]">Privacy</a>
          <a href="mailto:support@cargopilot.io" className="hover:text-[#1FE4FF]">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
