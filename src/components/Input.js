import React, { useState } from "react";

const Input = ({ onTermChange }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTermChange(input);
          setInput("");
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
