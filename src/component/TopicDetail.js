import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const TopicDetail = () => {
    const loaded = useLoaderData().data.questions
    return (
        <div>
            {
                loaded.map(QuizQuestion => <Quiz QuizQuestion={QuizQuestion}/>
                )
            }
        </div>
    );
};

export default TopicDetail;