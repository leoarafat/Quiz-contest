import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";

const ShowQuiz = ({ quizAnswer }) => {
  // console.log(que);

  const { question, options, correctAnswer } = quizAnswer;
  console.log(options);

  const [open, setOpen] = useState(false);

  const quizHandler = (option) => {
    if (option === correctAnswer) {
      toast.success("Correct Answer", { autoClose: 500 });
      // alert ('true')
    } else {
      toast.warning("Wrong Answer", { autoClose: 500 });
      // alert('false')
    }
  };

  return (
    <div className="border-2 mb-12 rounded p-4 shadow-md lg:w-1/2 md:w-4/5  mx-2 md:mx-auto ">
      <div className=" bg-[#150050] text-white p-2 rounded-md m-3 flex justify-between relative">
        <div className="text-center w-full">
          <p className="text-xl font-semibold">{question}</p>
        </div>

        <div className="h-6 w-6" onClick={() => setOpen(!open)}>
          {open ? <EyeIcon /> : <EyeSlashIcon />}
        </div>

        <p
          className={`text-black ${
            open
              ? "absolute right-8  transition-all bg-slate-200 font-bold py-2 px-2 rounded"
              : "hidden"
          }`}
        >
          {correctAnswer}
        </p>
      </div>

      <div className="sm:grid grid-cols-2 gap-2 mt-7 flex flex-col ">
        {options.map((option, id) => (
          <div
            className=" border-2 pt-2 rounded-lg  flex items-center gap-2"
            key={id}
          >
            <input type="radio" name="quiz" id={option} />
            <label
              htmlFor={option}
              className="w-full py-4 cursor-pointer h-full"
              onClick={(e) => quizHandler(option)}
            >
              {""}
              <p>{option}</p>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowQuiz;
