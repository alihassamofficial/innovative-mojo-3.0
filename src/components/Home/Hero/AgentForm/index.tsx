"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { twMerge } from "tailwind-merge";

const AgentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ name, email, phone });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center bg-[#FFFBF0] border border-[#F5E6B3] p-5 md:p-8 gap-3 md:gap-3 rounded-[30px] w-full max-w-[1010px] mx-auto shadow-sm"
    >
      {/* Name Input */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full md:flex-1 md:max-w-[239px] bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border border-[#E5BF5B] rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base"
      />

      {/* Vertical Separator */}
      <div className="hidden md:block w-px h-8 md:h-12 bg-gray-400" />

      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        className="w-full md:flex-1 md:max-w-[239px] bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border border-[#E5BF5B] rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base"
        />

      {/* Vertical Separator */}
      <div className="hidden md:block w-px h-8 md:h-12 bg-gray-400" />

      {/* Phone Input */}
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone No."
        className="w-full md:flex-1 md:max-w-[239px] bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border border-[#E5BF5B] rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base"
        />

      {/* Submit Button */}
      <Button
        type="submit"
        className={twMerge(
          "w-full md:max-w-[122px] bg-secondary rounded-full font-semibold text-[16px] h-[44px]"
        )}
      >
        Submit
      </Button>
    </form>
  );
};

export default AgentForm;