import Image from "next/image";
import WaitlistForm from "../components/WaitlistForm";
import SectionCard from "../components/SectionCard";

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

        <div className="mt-8 w-full max-w-lg">
          <WaitlistForm />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-[#0F172A]">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#1FE4FF] mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
          <SectionCard
            icon={"📦"}
            title="Post Parcel"
            description="Create a request for your delivery"
          />
          <SectionCard
            icon={"✈️"}
            title="Match Traveler"
            description="Our AI matches you with trusted travelers"
          />
          <SectionCard
            icon={"✅"}
            title="Track & Deliver"
            description="Enjoy fast, secure delivery you can trust"
          />
        </div>
      </section>
    </main>
  );
}
