"use client";

import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegisterModalComponent = React.memo(({ isOpen, onClose }: RegisterModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-xl max-w-3xl w-full h-[80vh] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Event Registration</h3>
              <button
                onClick={onClose}
                aria-label="Close registration form"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <div className="flex-grow overflow-auto">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfQxp12jX7xwTBnc98mkZIC82TTq2h80hPK4l6PzbrzzSvCeg/viewform?embedded=true"
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                loading="lazy"
                className="w-full h-full"
                title="Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
});

export default RegisterModalComponent;
