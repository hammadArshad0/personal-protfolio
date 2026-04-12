import React from "react";
// Make sure you have react-icons installed: npm install react-icons
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsAppButton = () => {
  const phoneNumber = "923439319228"; // Removed spaces for the link to work correctly
  const message = "Hello! I want to chat with you.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip text (shows on hover) */}
      <span className="absolute right-16 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
        Chat with us!
      </span>

      {/* Animated Pulse Effect */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

      {/* Main Button */}
      <div className="relative bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 flex items-center justify-center">
        <FaWhatsapp size={32} />
      </div>
    </a>
  );
};

export default WhatsAppButton;