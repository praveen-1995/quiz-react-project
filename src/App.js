import React from "react";
import { useGlobalContext } from "./context";

import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Modal from "./Modal";
function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm></SetupForm>;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  console.log(questions[0]);

  const { correct_answer, incorrect_answers, question } = questions[0];

  return <main>quiz app</main>;
}

export default App;
