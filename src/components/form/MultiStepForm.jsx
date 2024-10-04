import React, { useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUserData } from "../../store/slices/userSlice";

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const { update, updateUser } = useSelector((state) => state.users);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = () => {
    try {
      dispatch(addUser(formData));
    } catch (error) {
      console.log("error: ", error);
    }
    alert("Form submitted successfully!");
    setFormData({});
    setStep(1); 
  };

  const updateForm = () => {
    try {
      dispatch(updateUserData(formData));
    } catch (error) {
      console.log("error: ", error);
    }
    alert("Form submitted successfully!");
    setFormData({});
    setStep(1); 
  };

  useEffect(() => {
    setFormData(updateUser);
  }, [update]);

  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 2 && (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <StepThree
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 4 && (
        <StepFour
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
          submitForm={submitForm}
          updateForm={updateForm}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
