import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuiz from './ShowQuiz';

// import ShowQuiz from './ShowQuiz';

const QuizQuestion = () => {
  const loadQuiz = useLoaderData().data.questions
// console.log(loadQuiz)



  const handleRightButton = (props) =>{
    const correct = props.correctAnswer
    const option = props.options

    if(correct === option){
      console.log('true')
      
    }else{
      console.log('false')
      
    }
  }
    

  return (
    <div>
      {
        loadQuiz.map(pro => <ShowQuiz handleRightButton={handleRightButton}  que={pro}/>
        )
      }
    </div>
  );
};

export default QuizQuestion;