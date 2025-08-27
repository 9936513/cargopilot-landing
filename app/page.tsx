import WaitlistForm from "../components/WaitlistForm";
import FadeIn from "../components/FadeIn";
import SectionTitle from "../components/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-6xl font-bold text-[#1FE4FF]">CargoPilot</h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-gray-300">
            The World’s Fastest Secure Delivery Powered by Travelers
          </p>
        </FadeIn>

        <FadeIn delay={200} className="mt-8 w-full max-w-lg">
          <WaitlistForm />
        </FadeIn>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <FadeIn>
          <SectionTitle>How It Works</SectionTitle>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center mt-12">
          {/* Card 1 */}
          <FadeIn delay={0}>
            <div
              className="
                rounded-xl border border-white/5 bg-[#0B1220] p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
                focus-within:-translate-y-1 focus-within:shadow-lg focus-within:shadow-black/20
                motion-reduce:transition-none
              "
              tabIndex={0}
            >
              <p className="text-4xl mb-4" aria-hidden>📦</p>
              <h3 className="text-xl font-semibold mb-2">Post Parcel</h3>
              <p className="text-gray-400">Create a request for your delivery</p>
            </div>
          </FadeIn>

          {/* Card 2 */}
          <FadeIn delay={100}>
            <div
              className="
                rounded-xl border border-white/5 bg-[#0B1220] p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
                focus-within:-translate-y-1 focus-within:shadow-lg focus-within:shadow-black/20
                motion-reduce:transition-none
              "
              tabIndex={0}
            >
              <p className="text-4xl mb-4" aria-hidden>✈️</p>
              <h3 className="text-xl font-semibold mb-2">Traveler Delivers</h3>
              <p className="text-gray-400">Verified travelers deliver securely</p>
            </div>
          </FadeIn>

          {/* Card 3 */}
          <FadeIn delay={200}>
            <div
              className="
                rounded-xl border border-white/5 bg-[#0B1220] p-6
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20
                focus-within:-translate-y-1 focus-within:shadow-lg focus-within:shadow-black/20
                motion-reduce:transition-none
              "
              tabIndex={0}
            >
              <p className="text-4xl mb-4" aria-hidden>✅</p>
              <h3 className="text-xl font-semibold mb-2">Get It Fast</h3>
              <p className="text-gray-400">Same-day or next-day delivery</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} CargoPilot. All rights reserved.
      </footer>
    </main>
  );
}
