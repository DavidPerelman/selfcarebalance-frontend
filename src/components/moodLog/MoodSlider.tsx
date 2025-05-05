import { useEffect, useRef } from "react";
import "./MoodSlider.css";

type MoodSliderProps = {
  moodScore: number;
  setMoodScore: (value: number) => void;
};

export default function MoodSlider({
  moodScore,
  setMoodScore,
}: MoodSliderProps) {
  const slideValueRef = useRef<HTMLSpanElement | null>(null);
  const inputSliderRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (slideValueRef.current) {
      // עדכון הטקסט
      slideValueRef.current.textContent = String(moodScore);

      // עדכון המיקום
      if (moodScore == 10) {
        slideValueRef.current.style.left = `calc(${Number(moodScore) * 10}%)`;
      } else {
        slideValueRef.current.style.left = `calc(${
          Number(moodScore) * 10 - 2
        }%)`;
      }
    }
  }, [moodScore]);

  return (
    <div className="range">
      <div className="sliderValue">
        <span className="show" ref={slideValueRef}>
          5
        </span>
      </div>
      <div className="field">
        <div className="value left">1</div>
        <input
          ref={inputSliderRef}
          type="range"
          min={1}
          max={10}
          value={moodScore}
          onChange={(e) => setMoodScore(Number(e.target.value))}
        />
        <div className="value right">10</div>
      </div>
    </div>
  );
}
