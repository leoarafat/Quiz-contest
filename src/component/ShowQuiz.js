import React from "react";
import { EyeIcon } from "@heroicons/react/24/solid";
const ShowQuiz = ({ que, handleRightButton }) => {
//   console.log(que);

  const { question, options,  } = que;

  return (
    <div className="sm:w-[100%] m-[50px] lg:w-[600px] mx-auto border border-solid  rounded-md ">
      <p className="bg-gray-500 text-white p-2 rounded-md m-3 flex justify-between">{question} <EyeIcon className="h-6 w-6"/>
      </p>
      <p>
        {options.map((option) => (
          <div className=" w-[300px] mx-auto ">
            <p
              onClick={() => handleRightButton(option)}
              className=" bg-gray-600 m-3 p-2 rounded-md"
            >
              <input type="radio" name="option" id="" />
              {option}
            </p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default ShowQuiz;
