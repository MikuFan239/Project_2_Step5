//Reference: https://www.youtube.com/watch?v=Lya-qYiDqIA
// https://github.com/chrisblakely01/quiz-app

import './Quiz.css';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function QuizBody() {
    const { t } = useTranslation();

	const questions = [
		{
			questionText: t("Quiz.q1-text"),
			answerOptions: [
				{ answerText: t("Quiz.q1-ans-1"), isCorrect: false },
				{ answerText: t("Quiz.q1-ans-2"), isCorrect: false },
				{ answerText: t("Quiz.q1-ans-3"), isCorrect: true },
				{ answerText: t("Quiz.q1-ans-4"), isCorrect: false },
			],
		},
		{
			questionText: t("Quiz.q2-text"),
			answerOptions: [
				{ answerText: t("Quiz.q2-ans-1"), isCorrect: false },
				{ answerText: t("Quiz.q2-ans-2"), isCorrect: true },
				{ answerText: t("Quiz.q2-ans-3"), isCorrect: false },
				{ answerText: t("Quiz.q4-ans-4"), isCorrect: false },
			],
		},
		{
			questionText: t("Quiz.q3-text"),
			answerOptions: [
				{ answerText: t("Quiz.q3-ans-1"), isCorrect: true },
				{ answerText: t("Quiz.q3-ans-2"), isCorrect: false },
				{ answerText: t("Quiz.q3-ans-3"), isCorrect: false },
				{ answerText: t("Quiz.q3-ans-4"), isCorrect: false },
			],
		},
		{
			questionText: t("Quiz.q4-text"),
			answerOptions: [
				{ answerText: t("Quiz.q4-ans-1"), isCorrect: false },
				{ answerText: t("Quiz.q4-ans-2"), isCorrect: false },
				{ answerText: t("Quiz.q4-ans-3"), isCorrect: false },
				{ answerText: t("Quiz.q4-ans-4"), isCorrect: true },
			],
		},
		{
			questionText: t("Quiz.q5-text"),
			answerOptions: [
				{ answerText: t("Quiz.q5-ans-1"), isCorrect: false },
				{ answerText: t("Quiz.q5-ans-2"), isCorrect: false },
				{ answerText: t("Quiz.q5-ans-3"), isCorrect: false },
				{ answerText: t("Quiz.q5-ans-4"), isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const retry = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	return (
		<div className='quizBody'>
			{showScore ? (
				<div className='score-section'>
					<p>You scored {score} out of {questions.length}</p>
					<button onClick={retry} id="retryBtn">Retry</button>
				</div>
			) : (
				<>
					<div className="quizTitle">
						<h2>TEST YOUR KNOWLEDGE OF MAGICAL MIRAI</h2>
					</div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
