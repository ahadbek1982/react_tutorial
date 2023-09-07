import React, { useEffect, useState } from "react";

function Dictionery() {
  const [word, setword] = useState();
  useEffect(() => {
    console.log("word updated", word);
  });
  return (
    <div className="bg-gray-400 min-h-screen">
      <input
        type="text"
        onChange={(e) => {
          setword(e.target.value);
        }}
      />
      <h3>Let's get the definition for {word}</h3>
    </div>
  );
}

export default Dictionery;
