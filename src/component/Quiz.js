import React from 'react';

const Quiz = ({QuizQuestion}) => {
    // console.log(QuizQuestion)
    const {question} = QuizQuestion
    // console.log(question)
    
    
    
    return (
        <div>
            <h2>{question}</h2>
        </div>
    );
};

export default Quiz;