import React from 'react';

const QuizItem = ({quizItem}) => {
    // console.log(quizItem)
    const {id, logo, name, total} = quizItem
    
    return (
<div className="card  glass card w-[300px] mx-auto my-2">
  <figure><img src={logo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Total Quiz {total}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Start Quiz</button>
    </div>
  </div>
</div>
    );
};

export default QuizItem;

// <div className=" card w-[300px] mx-auto my-2 bg-purple-900 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img src={logo} alt="Shoes" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{name}</h2>
//     <p>Total Quiz {total}</p>
//     <div className="card-actions">
//       <button className="btn btn-primary">Start Quiz</button>
//     </div>
//   </div>
// </div>