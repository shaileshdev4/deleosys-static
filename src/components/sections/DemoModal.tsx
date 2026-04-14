import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { FiUser, FiMail, FiPhone, FiBriefcase, FiCalendar, FiClock } from "react-icons/fi";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const inputClass =
  "w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[14px] text-[#1F2A44] placeholder:text-[#9CA3AF] outline-none focus:border-[#F7931E] focus:ring-2 focus:ring-[#F7931E]/10 transition-all duration-200";
const labelClass = "block text-[#1F2A44] text-[13px] font-semibold mb-1.5";

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    date: "",
  });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const step1Valid =
    form.fullName.trim() && form.company.trim() && form.email.includes("@") && form.phone.trim().length >= 10;

  const step2Valid = form.date && selectedSlot;

  const handleSubmit = async () => {
    if (!step2Valid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, slot: selectedSlot }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Booking failed");
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSubmitted(false);
      setSelectedSlot(null);
      setError(null);
      setForm({ fullName: "", company: "", email: "", phone: "", date: "" });
    }, 300);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="pointer-events-auto w-full max-w-[520px] bg-white rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.18)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative px-8 pt-8 pb-6 border-b border-[#F3F4F6]">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-[22px] font-bold text-[#1F2A44] mt-2">
                      {submitted ? "You're all set!" : "Request a Demo"}
                    </h2>
                    {!submitted && (
                      <p className="text-[#6B7280] text-[13px] mt-1">
                        {step === 1 ? "Tell us about yourself" : "Pick a time that works for you"}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={handleClose}
                    className="w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center hover:bg-[#E5E7EB] transition-colors duration-200 shrink-0 mt-1"
                  >
                    <FaTimes className="text-[#6B7280] text-[12px]" />
                  </button>
                </div>

                {!submitted && (
                  <div className="flex items-center gap-2 mt-5">
                    {[1, 2].map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-[12px] font-bold transition-all duration-300 ${
                            step >= s
                              ? "bg-gradient-to-br from-[#E65C00] to-[#F7931E] text-white shadow-md shadow-orange-200"
                              : "bg-[#F3F4F6] text-[#9CA3AF]"
                          }`}
                        >
                          {step > s ? "✓" : s}
                        </div>
                        {s < 2 && (
                          <div
                            className={`h-px w-10 transition-all duration-300 ${step > s ? "bg-[#F7931E]" : "bg-[#E5E7EB]"}`}
                          />
                        )}
                      </div>
                    ))}
                    <span className="text-[12px] text-[#9CA3AF] ml-2">Step {step} of 2</span>
                  </div>
                )}
              </div>

              <div className="px-8 py-6">
                <AnimatePresence mode="wait">
                  {submitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center gap-4 py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center"
                      >
                        <FaCheckCircle className="text-green-500 text-[32px]" />
                      </motion.div>
                      <div>
                        <h3 className="text-[18px] font-bold text-[#1F2A44]">Demo Booked!</h3>
                        <p className="text-[#6B7280] text-[14px] mt-2 leading-[1.7] max-w-[320px]">
                          We've received your request for <strong>{selectedSlot}</strong> on <strong>{form.date}</strong>. Our
                          team will confirm within 2 hours.
                        </p>
                      </div>
                      <p className="text-[13px] text-[#9CA3AF]">
                        A confirmation has been sent to <strong>{form.email}</strong>
                      </p>
                      <button onClick={handleClose} className="btn-primary mt-2">
                        Done
                      </button>
                    </motion.div>
                  )}

                  {!submitted && step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.22 }}
                      className="flex flex-col gap-4"
                    >
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                          <input
                            type="text"
                            placeholder="John Smith"
                            value={form.fullName}
                            onChange={(e) => update("fullName", e.target.value)}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={labelClass}>Company Name *</label>
                        <div className="relative">
                          <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                          <input
                            type="text"
                            placeholder="Acme Technologies"
                            value={form.company}
                            onChange={(e) => update("company", e.target.value)}
                            className={`${inputClass} pl-10`}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                            <input
                              type="email"
                              placeholder="john@company.com"
                              value={form.email}
                              onChange={(e) => update("email", e.target.value)}
                              className={`${inputClass} pl-10`}
                            />
                          </div>
                        </div>
                        <div>
                          <label className={labelClass}>Mobile Number *</label>
                          <div className="relative">
                            <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] text-[15px]" />
                            <input
                              type="tel"
                              placeholder="+91 98765 43210"
                              value={form.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              className={`${inputClass} pl-10`}
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        disabled={!step1Valid}
                        className={`btn-primary w-full justify-center mt-2 transition-opacity duration-200 ${!step1Valid ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        Continue to Schedule →
                      </button>
                    </motion.div>
                  )}

                  {!submitted && step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.22 }}
                      className="flex flex-col gap-5"
                    >
                      <div>
                        <label className={labelClass}>
                          <FiCalendar className="inline mr-1.5 mb-0.5" />
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={(e) => update("date", e.target.value)}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label className={labelClass}>
                          <FiClock className="inline mr-1.5 mb-0.5" />
                          Preferred Time Slot *
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedSlot(slot)}
                              className={`py-2 px-1 rounded-lg text-[12px] font-semibold border transition-all duration-200 ${
                                selectedSlot === slot
                                  ? "bg-gradient-to-br from-[#E65C00] to-[#F7931E] text-white border-transparent shadow-md shadow-orange-200"
                                  : "bg-white text-[#1F2A44] border-[#E5E7EB] hover:border-[#F7931E]/50 hover:bg-orange-50/50"
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                        <p className="text-[11px] text-[#9CA3AF] mt-2">All times are in IST (India Standard Time)</p>
                      </div>

                      {error && (
                        <div className="px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-[13px]">
                          {error}
                        </div>
                      )}

                      <div className="flex gap-3 mt-1">
                        <button onClick={() => setStep(1)} className="btn-outline-dark flex-1 justify-center">
                          ← Back
                        </button>
                        <button
                          onClick={handleSubmit}
                          disabled={!step2Valid || loading}
                          className={`btn-primary flex-1 justify-center ${!step2Valid || loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <motion.span
                                animate={{ rotate: 360 }}
                                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                              />
                              Booking...
                            </span>
                          ) : (
                            "Confirm Booking ✓"
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
