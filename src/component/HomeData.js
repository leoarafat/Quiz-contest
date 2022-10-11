import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeData = ({data}) => {
    const {id, logo, name, total} = data

      const naviGate = useNavigate();

  const handleStartPractice = () => {
    naviGate(`/quiz/${id}`);
    
  };
    return (
        <div className='bg-blue-500 rounded-md'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex pt-3 justify-between items-center'>
        <h1>{name}</h1>
        <p>{total}</p>
        <button 
        onClick={handleStartPractice}>
            <span>Start Practice</span>

            </button>
            </div>
            
        </div>
    );
};

export default HomeData;