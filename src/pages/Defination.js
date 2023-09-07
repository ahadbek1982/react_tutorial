import React, { useEffect } from "react";

function Defination() {
  useEffect(() => {
    fetch(
      "https://telesign-telesign-send-sms-verification-code-v1.p.rapidapi.com/sms-verification-code"
    )
      .then((response) => response.json)
      .then((data) => console.log(data));
  }, []);
  return <div>Here is a dedination</div>;
}

export default Defination;
