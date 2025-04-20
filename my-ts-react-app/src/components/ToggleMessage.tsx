import React from "react";
import useToggle from "../hooks/useToggle";

const ToggleMessage: React.FC = () => {
  const [isVisible, toggleVisibility] = useToggle(false);

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Message" : "Show Message"}
      </button>

      {isVisible && <p>Hello from the custom hook! 🎉</p>}
    </div>
  );
};

export default ToggleMessage;
