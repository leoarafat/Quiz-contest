import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const QuizItemCard = ({ quizItem , handleAddButton}) => {
  // console.log(quizItem)
  const { logo, name, total } = quizItem;

  return (
    <div className="glass card w-[300px] mx-auto my-2">
      <figure>
        <img src={logo} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Total Quiz {total}</p>
        <div className="card-actions justify-end">
          <button 
          onClick={() => handleAddButton(quizItem)}
          className="btn btn-primary">
            Start Quiz <ArrowLongRightIcon className="h-6 w-6 text-pink-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizItemCard;
