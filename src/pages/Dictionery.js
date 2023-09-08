import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dictionery() {
  const [word, setword] = useState();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 min-h-screen">
      <input
        type="text"
        onChange={(e) => {
          setword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/definition/" + word);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Dictionery;
