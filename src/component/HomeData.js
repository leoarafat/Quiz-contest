import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeData = ({data}) => {
    const {id, logo, name, total} = data

      const naviGate = useNavigate();

  const handleStartPractice = () => {
    naviGate(`/quiz/${id}`);
    
  };
    return (
<div className="card w-96 glass mx-auto my-4 ">
  <figure><img src={logo} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Total Quiz: {total}</h2>
    <p>{name}</p>
    <div className="card-actions justify-end">
    <button className='btn' 
        onClick={handleStartPractice}>
            <span>Start Practice</span>

            </button>
    </div>
  </div>
</div>
    );
};

export default HomeData;



