import React from "react";
import { useSelector } from "react-redux";

const StepFour = ({
  prevStep,
  setFormData,
  formData,
  submitForm,
  updateForm,
}) => {
  const { update, updateUser } = useSelector((state) => state.users);
  const handleSubmit = () => {
    if (update) {
      updateForm();
    } else {
      submitForm();
    }
  };

  return (
    <div className="flex flex-col justify-normal gap-[1rem]">
      <h2 className="text-[2rem] font-bold">Confirm your details</h2>
      <div className="flex flex-col justify-normal gap-[0.5rem]">
        <div>
          <span className="font-bold">Name:</span> {formData.name}
        </div>
        <div>
          <span className="font-bold">Email:</span> {formData.email}
        </div>
        <div>
          <span className="font-bold">Password:</span> {formData.password}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          {update ? "Update" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default StepFour;
