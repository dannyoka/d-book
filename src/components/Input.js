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
        className="form-group"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="form-group"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Input;
