
import React, { useEffect, useState } from "react";

const Typewriter = ({
  text,
  speed = 80,
  delay = 2000,
  deleteSpeed = 40,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayText === text) {
      // Wait 2 seconds after completing text
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting && displayText === "") {
      // Start typing again
      setIsDeleting(false);
    } else {
      // Typing and deleting
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : text.slice(0, prev.length + 1)
        );
      }, isDeleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, delay, deleteSpeed]);

  return (
    <span>
      {displayText}
      <span className="inline-block animate-pulse ml-1"></span>
    </span>
  );
};

export default Typewriter;
