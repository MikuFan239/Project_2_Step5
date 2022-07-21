// reference: https://www.cluemediator.com/create-simple-popup-in-reactjs
import QuizBody from "./QuizBody";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Popup from './Popup';

const Quiz = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (  
        <div className="quiz">
            <input
                type="button"
                value={t("Quiz.title")}
                id="quizBtn"
                onClick={togglePopup}
            />
            
            {isOpen && <Popup
                content={
                    <QuizBody/>
                }
                handleClose={togglePopup}
            />}
        </div>
    );
}
 
export default Quiz;