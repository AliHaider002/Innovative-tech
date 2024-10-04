import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StepOne = ({ nextStep, setFormData, formData }) => {
  const { update, updateUser } = useSelector((state) => state.users);
  const [name, setName] = useState(formData.name || "");
  const [error, setError] = useState("");

  useEffect(() => {
    setName(updateUser.name);
  }, [update]);

  const handleNext = () => {
    if (!name) {
      setError("Name is required");
    } else {
      setError("");
      setFormData((prev) => ({ ...prev, name }));
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 1: Enter Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded w-full"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default StepOne;
