import React, { useState } from "react";
import Modal from "./Modal";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hydrncixlahhlowdekkn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5ZHJuY2l4bGFoaGxvd2Rla2tuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2MDI4MTIsImV4cCI6MjA3MzE3ODgxMn0.Z3zUy3-SX2uMeo0HoldzyAEgSFjPAKRtBJszPKeMNKw";
const supabase = createClient(supabaseUrl, supabaseKey);

const StepperForm = ({ selectedService }) => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (step === 1 && !formData.description.trim()) {
      setError("Please describe your need before continuing.");
      return false;
    }
    if (step === 2 && !formData.location.trim()) {
      setError("Please enter your location before continuing.");
      return false;
    }
    if (step === 3) {
      if (!formData.name.trim()) {
        setError("Please enter your name.");
        return false;
      }
      if (!formData.phone.trim()) {
        setError("Please enter your phone number.");
        return false;
      }
      if (!formData.email.trim()) {
        setError("Please enter your email.");
        return false;
      }
    }
    setError(""); // clear error if validation passes
    return true;
  };

  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    setIsLoading(true);

    const { error } = await supabase
      .from("service_request")
      .insert([{ ...formData, service: selectedService }]);

    if (error) {
      setError("Please, check again. Form failed to submit");
      console.log(error.message);
    } else {
      setError("Form submitted successfully! 🎉");

      setFormData({
        location: "",
        description: "",
        name: "",
        phone: "",
        email: "",
      });
      setStep(1);
    }

    setIsLoading(false);
  };

  const steps = ["Your Need", "Location", "Contact Info"];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Request: {selectedService}
        </h2>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded"></div>
          <div
            className="absolute top-1/2 left-0 h-1 bg-green-500 rounded transition-all duration-500"
            style={{ width: `${(step / steps.length) * 100}%` }}
          ></div>
          {steps.map((label, index) => {
            const stepNumber = index + 1;
            return (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center"
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold transition-all duration-300 ${
                    step === stepNumber
                      ? "bg-green-600 text-white"
                      : step > stepNumber
                      ? "bg-green-400 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {stepNumber}
                </div>
                <span
                  className={`mt-2 text-xs ${
                    step === stepNumber
                      ? "text-green-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <label className="block mb-2 font-medium text-gray-700">
              Describe Your Need
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Tell us about your project..."
            ></textarea>
            <button
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all"
              onClick={nextStep}
            >
              Next →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <label className="block mb-2 font-medium text-gray-700">
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Where are you asking from?"
            />
            <div className="flex mt-6 justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
                onClick={prevStep}
              >
                ← Back
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
                onClick={nextStep}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="animate-fadeIn">
            <p className="mb-4 text-gray-700 font-medium">
              How should we contact you?
            </p>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mb-4"
              placeholder="Your Name"
            />
            <label className="block mb-2 font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mb-4"
              placeholder="Your Phone Number"
            />
            <label className="block mb-2 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none mb-4"
              placeholder="Your Email"
            />
            <div className="flex mt-6 justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
                onClick={prevStep}
              >
                ← Back
              </button>
              <button
                disabled={isLoading}
                className={`bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all`}
                onClick={handleSubmit}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 🔹 Error / Success Modal */}
      <Modal message={error} onClose={() => setError("")} />
    </div>
  );
};

export default StepperForm;
