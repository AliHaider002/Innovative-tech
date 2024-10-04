import React, { useState } from "react";

const StepThree = ({ nextStep, prevStep, setFormData, formData }) => {
  const [password, setPassword] = useState(formData.password || "");
  const [confirmPassword, setConfirmPassword] = useState(
    formData.confirmPassword || ""
  );
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters long");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
      setFormData((prev) => ({ ...prev, password, confirmPassword }));
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 3: Set Password</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        className="border p-2 rounded w-full"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        className="border p-2 rounded w-full mt-2"
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
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepThree;
