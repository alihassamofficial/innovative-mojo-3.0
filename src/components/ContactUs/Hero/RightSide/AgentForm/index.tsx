"use client";

import React, { useState } from "react";
import Button from "@/components/ui/Button";
import { twMerge } from "tailwind-merge";
import toast from "react-hot-toast";
import { isValidPhoneNumber } from "libphonenumber-js";

const AgentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    
    // Clear error when user starts typing
    if (phoneError) {
      setPhoneError("");
    }
    
    // Validate phone number if it's not empty
    if (value.trim() !== "") {
      const isValid = isValidPhoneNumber(value);
      if (!isValid) {
        setPhoneError("Please enter a valid phone number");
      } else {
        setPhoneError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (phone.trim() === "") {
      setPhoneError("Phone number is required");
      toast.error("Please enter a valid phone number");
      return;
    }
    
    if (!isValidPhoneNumber(phone)) {
      setPhoneError("Please enter a valid phone number");
      toast.error("Please enter a valid phone number");
      return;
    }
    
    setIsLoading(true);
    setPhoneError("");

    try {
      const response = await fetch('/api/vapi/call', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initiate call');
      }

      toast.success('Call initiated! Our AI will call you shortly.');
      
      // Reset form on success
      setName("");
      setEmail("");
      setPhone("");
      setPhoneError("");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:items-center bg-[#FFFBF0] border border-[#F5E6B3] p-5 gap-3 md:gap-3 rounded-[30px] w-full max-w-[1010px] mx-auto shadow-sm"
      >
      {/* Inputs Container - One line on desktop */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 md:gap-3 w-full">
        {/* Name Input */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          disabled={isLoading}
          className="w-full md:flex-1 md:max-w-[239px] bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border border-[#E5BF5B] rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base disabled:opacity-50"
        />

        {/* Vertical Separator */}
        <div className="hidden md:block p-[0.5px] h-8 md:h-12 bg-gray-400" />

        {/* Email Input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
          disabled={isLoading}
          className="w-full md:flex-1 md:max-w-[239px] bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border border-[#E5BF5B] rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base disabled:opacity-50"
          />

        {/* Vertical Separator */}
        <div className="hidden md:block p-[0.5px] h-8 md:h-12 bg-gray-400" />

        {/* Phone Input */}
        <div className="w-full md:flex-1 md:max-w-[239px]">
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Phone No."
            required
            disabled={isLoading}
            className={`w-full bg-[#0000000F] h-[44px] px-3 md:px-4 py-2 md:py-4 border rounded-[70px] text-black placeholder:text-black/40 focus:outline-none text-sm md:text-base disabled:opacity-50 ${
              phoneError 
                ? 'border-red-500 focus:border-red-500' 
                : 'border-[#E5BF5B] focus:border-[#E5BF5B]'
            }`}
          />
        </div>
      </div>

      {/* Submit Button - Next line on desktop */}
      <div className="w-full md:flex md:justify-center">
        <Button
          type="submit"
          disabled={isLoading}
          className={twMerge(
            "w-full  bg-secondary rounded-full font-semibold text-[16px] h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
          )}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
    </div>
  );
};

export default AgentForm;