import React from 'react';
import { useSetRecoilState } from 'recoil';
import { userAtoms } from '../../recoil/userAtoms';
import { useNavigate } from 'react-router-dom';
import './IntroButton.css';

export const IntroButton = () => {
    const setUserState = useSetRecoilState(userAtoms);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        setUserState((prevState) => ({
            ...prevState,
            currentPage: 'input',
        }));
        navigate('/basic');
    };

    return (
        <div>
            <button className="defaultButton" role="button" onClick={handleButtonClick}>
                <span className="text">ANALYZE</span>
                <span>미구현입니다</span>
            </button>
        </div>
    );
};