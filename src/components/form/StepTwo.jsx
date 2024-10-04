import React, { useState } from "react";

const StepTwo = ({ nextStep, prevStep, setFormData, formData }) => {
  const [email, setEmail] = useState(formData.email || "");
  const [error, setError] = useState("");

  const handleNext = () => {
    const emailPattern = /\S+@\S+\.\S+/;
    if (!email || !emailPattern.test(email)) {
      setError("A valid email is required");
    } else {
      setError("");
      setFormData((prev) => ({ ...prev, email }));
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 2: Enter Email</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border p-2 rounded w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
