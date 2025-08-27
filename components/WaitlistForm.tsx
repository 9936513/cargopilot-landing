"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "../supabaseClient";
import CheckoutButton from "./CheckoutButton"; // 👈 add import

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof schema>;

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setMessage(null);

    const { error } = await supabase.from("waitlist").insert([
      {
        name: data.name,
        email: data.email,
      },
    ]);

    if (error) {
      setMessage("❌ Something went wrong. Please try again.");
      console.error(error);
    } else {
      setMessage("✅ Thank you! You’ve joined the waitlist.");
      reset();
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-[#0B1220] p-6 rounded-2xl shadow-lg space-y-4 border border-[#1FE4FF]/20"
    >
      <h3 className="text-xl font-bold text-center text-[#1FE4FF]">
        Join the Waitlist
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        {...register("name")}
        className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1FE4FF]"
      />
      {errors.name && (
        <p className="text-red-400 text-sm">{errors.name.message}</p>
      )}

      <input
        type="email"
        placeholder="Your Email"
        {...register("email")}
        className="w-full px-4 py-2 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#1FE4FF]"
      />
      {errors.email && (
        <p className="text-red-400 text-sm">{errors.email.message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg bg-[#1FE4FF] text-black font-semibold hover:opacity-90 transition"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>

      {/* Success/Error message */}
      {message && (
        <p className="text-center text-sm text-gray-300 mt-2">{message}</p>
      )}

      {/* Stripe Checkout Button */}
      <div className="pt-4">
        <CheckoutButton />
      </div>
    </form>
  );
}
