import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dictionery() {
  const [word, setword] = useState();
  const navigate = useNavigate();
  return (
    <div className="bg-gray-400 min-h-screen">
      <form
        className="flex justify-center space-x-2 max-x-[300px] "
        onSubmit={() => {
          navigate("/definition/" + word);
        }}
      >
        <input
          className="px-2 py-1 rounded shrink min-w-0"
          placeholder="Enter noun or verb"
          type="text"
          onChange={(e) => {
            setword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            navigate("/definition/" + word);
          }}
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Dictionery;
