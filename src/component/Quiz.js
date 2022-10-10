import React from "react";

const Quiz = ({ QuizQuestion }) => {
  // console.log(QuizQuestion)
  const { question, options } = QuizQuestion;
  // console.log(question)

  return (
    <div className="border border-solid p-3 m-2">
      <h2>{question}</h2>
      <div className=" grid grid-cols-2 p-2 my-3">
        {options.map((option) => (
          <p className="my-2 ">
            
              <input type="radio" />
              {option}
            
          </p>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
