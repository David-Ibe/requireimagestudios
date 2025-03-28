"use client";

import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", { id: loadingToast });
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        toast.error("Failed to send message. Please try again.", { id: loadingToast });
      }
    } catch {
      toast.error("An error occurred. Please try again.", { id: loadingToast });
    }
  };

  return (
    <div className="min-h-screen py-16">
      <Toaster 
        position="bottom-center"
        toastOptions={{
          duration: 60000,
          style: {
            minWidth: '300px',
            padding: '16px',
            textAlign: 'center'
          },
        }}
      />
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-red-500">Contact Us</h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Get in touch with us for bookings, inquiries, or any questions you may have.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 p-3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-red-500 py-3 text-white transition-colors hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-3">
              <a
                href="https://wa.me/2347039883247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                <span>+2347039883247</span>
              </a>
              <a href="mailto:info@requireimagestudios.com" className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span>info@requireimagestudios.com</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=123+Photography+Street,+Lagos,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3"
              >
                <MapPin className="h-5 w-5 text-red-500" />
                <span>Primewaters garden, Lekki, Lagos, Nigeria</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}