"use client"; // This allows us to use 'useState' for a better user experience

import { useState } from "react";
import { submitLead } from "@/app/actions";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleAction(formData: FormData) {
    setLoading(true);
    const result = await submitLead(formData);
    setLoading(false);

    if (result.success) {
      setMessage("Success! Your request is in the Web Corner.");
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      action={handleAction}
      className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold">Start a Project</h2>

      <input
        name="name"
        placeholder="Name"
        required
        className="border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border p-2 rounded"
      />

      <select name="projectType" className="border p-2 rounded">
        <option value="Website">Website</option>
        <option value="Web App">Web App</option>
      </select>

      <textarea
        name="message"
        placeholder="What are we building?"
        required
        className="border p-2 rounded"
        rows={4}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 disabled:bg-blue-300"
      >
        {loading ? "Sending..." : "Send Request"}
      </button>

      {message && (
        <p className="mt-2 text-center text-sm font-semibold">{message}</p>
      )}
    </form>
  );
}
