import React, { useState } from "react";

const StepperForm = ({ selectedService }) => {
  const [step, setStep] = useState(1);
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

  const handleSubmit = () => {
    console.log("Form submitted:", { service: selectedService, ...formData });
    alert("Form submitted successfully!");
  };

  const steps = ["Your Need", "Location", "Contact Info"];

  return (
    <div className="bg-gray-50 py-20 px-6">
      <div className="max-w-lg  mx-auto bg-white p-6 rounded-2xl shadow-lg">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Request: {selectedService}
        </h2>

        {/* Step Progress */}
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
              required
            ></textarea>

            <button
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all"
              onClick={() => setStep(2)}
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
              required
            />
            <div className="flex mt-6 justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
                onClick={() => setStep(1)}
              >
                ← Back
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
                onClick={() => setStep(3)}
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
              required
            />
            <label className="block mb-2 font-medium text-gray-700">
              Phone
            </label>
            <input
              required
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
              required
            />
            <div className="flex mt-6 justify-between">
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition-all"
                onClick={() => setStep(2)}
              >
                ← Back
              </button>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl transition-all"
                onClick={handleSubmit}
              >
                ✅ Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperForm;
