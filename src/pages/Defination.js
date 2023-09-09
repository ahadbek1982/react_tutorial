import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import NotFound from "./NotFound";
function Defination() {
  const [words, setWord] = useState();
  const [notFound, setNotFound] = useState(false);
  let { search } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          // navigate("/404");
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      });
  }, []);
  if (notFound === true) {
    return (
      <>
        {" "}
        <NotFound />
        <Link to="/dictionary">Search another</Link>
      </>
    );
  }
  // console.log(words);
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
