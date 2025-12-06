"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const payload = {
      data: {
        type: "webform_submission--contact_form",
        attributes: {
          webform_id: "contact_form",
          data: {
            name: form.name,
            email: form.email,
            message: form.message,
          },
        },
      },
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/webform_submission/contact_form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/vnd.api+json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) throw new Error("Submit failed");

      setStatus("Submitted successfully 🎉");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-5">
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-md p-3"
            value={form.name}
            required
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-md p-3"
            value={form.email}
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md p-3 h-32"
            value={form.message}
            required
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          ></textarea>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition">
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-4 text-center text-gray-700 font-medium">{status}</p>
        )}
      </div>
    </div>
  );
}
