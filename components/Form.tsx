"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/utils/cn";

export function SignupFormDemo() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission with validation
  const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.firstname.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setModalMessage("⚠️ Please fill in all the details.");
      setIsModalOpen(true);
      return;
    }

    // If all good
    setModalMessage("🎉 Your form has been submitted successfully!");
    setIsModalOpen(true);

    // Reset form
    setFormData({ firstname: "", lastname: "", email: "", message: "" });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 border backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 relative">
      <h2 className="font-bold text-xl text-center text-neutral-800 dark:text-neutral-200">
        Get In Touch
      </h2>

      <form className="my-9" onSubmit={handleSubmit2}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input
            id="message"
            placeholder="Your message"
            type="text"
            value={formData.message}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send →"}
          <BottomGradient />
        </button>
      </form>

      {/* 🔥 Modal Component */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} // click outside to close
            />

            {/* Modal Box */}
            <motion.div
              className="fixed z-50 inset-0 flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl max-w-sm w-full p-6 text-center">
                <h3 className="text-lg font-bold text-neutral-800 dark:text-white mb-3">
                  {modalMessage.startsWith("⚠️") ? "OOPPSS!!" : "Success"}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {modalMessage}
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className={`mt-6 px-6 py-2 rounded-lg shadow-md hover:opacity-90 transition ${
                    modalMessage.startsWith("⚠️")
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
                  }`}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
