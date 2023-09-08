import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Defination() {
  const [words, setWord] = useState();
  let { search } = useParams();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => response.json())
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);
  console.log(words);
  return (
    <>
      hello world
      {words ? (
        words.map((word) => {
          return <p>{word.definitions[0].definition}</p>;
        })
      ) : (
        <h1>function map is not work</h1>
      )}
      {/* {words.map((word) => {
        return <p>{word.definitions[0].definition}</p>;
      })} */}
    </>
  );
}

export default Defination;
