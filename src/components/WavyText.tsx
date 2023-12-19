import { useEffect } from "react";
import "../App.scss"; // Import your CSS file

const WavyText: React.FC = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".wavy span");
    spans.forEach((span, index) => {
      (span as HTMLElement).style.setProperty("--i", (index + 1).toString());
    });
  }, []);

  const text = "Loading...";

  return (
    <div className="wavy">
      {text.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default WavyText;
