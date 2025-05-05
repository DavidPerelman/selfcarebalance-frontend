import { useState } from "react";

export default function MoodLogForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => {
    setCurrentStep((prev) => (prev += 1));
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => (prev -= 1));
  };

  const totalSteps = 3;

  return (
    <div>
      <div>שלב {currentStep + 1}</div>
      {currentStep > 0 && <button onClick={goToPreviousStep}>חזור</button>}
      {currentStep < totalSteps - 1 && (
        <button onClick={goToNextStep}>הבא</button>
      )}
    </div>
  );
}
