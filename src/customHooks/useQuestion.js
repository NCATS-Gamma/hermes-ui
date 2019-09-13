import { useState } from 'react';

function useQuestion() {
  const [question, updateQuestion] = useState({});

  return {
    question,
    updateQuestion,
  };
}

export default useQuestion;
