import React, { useState } from 'react';
import normalCat from './NormalCat.PNG';
import happyCat1 from './HappyCat1.PNG';
import happyCat2 from './HappyCat2.PNG';
import happyCat3 from './HappyCat3.PNG';
import angryCat from './AngryCat.PNG';
import psychedCat from './PsychedCat.PNG';


export default function EarnPoints() {
	const questions = [
		{
			questionText: 'What is a credit card?',
			answerOptions: [
				{ answerText: 'A money substitute for items you cannot afford', isCorrect: false },
				{ answerText: 'A loan that has to be paid off every month', isCorrect: false },
				{ answerText: 'An arrangment by which you can buy somethin now, with the promise that you will pay for it in the future ', isCorrect: false },
				{ answerText: 'All of the Above', isCorrect: true },
			],
		},
		{
			questionText: 'What is interest?',
			answerOptions: [
				{ answerText: 'The money the credit card company pays to people who have credit cards', isCorrect: false },
				{ answerText: 'The money a person pays to the credit card company on top of the money that is already owed', isCorrect: true },
				{ answerText: 'The amount of money a lender will allow you to have', isCorrect: false },
				{ answerText: 'None of the Above', isCorrect: false },
			],
		},
		{
			questionText: 'How can you maintain good credit? ',
			answerOptions: [
				{ answerText: 'Pay at least the minimum payments of all your bills on time', isCorrect: true },
				{ answerText: 'Ask your parents to pay your bills for you', isCorrect: false },
				{ answerText: 'Use all your available credit on all accounts ', isCorrect: false },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
		{
			questionText: 'What is the best bank out there?',
			answerOptions: [
				{ answerText: 'Bank of America', isCorrect: false },
				{ answerText: 'Wells Fargo', isCorrect: false },
				{ answerText: 'JPMorgan Chase', isCorrect: false },
				{ answerText: 'Capital One', isCorrect: true },
			],
		},
	];

	const [image, setImage] = useState(normalCat);

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const [words, setWords] = useState("Answer: Correct!");


	const handleAnswerButtonClick = (isCorrect)  => {
		if (isCorrect === true){
			setScore(score + 1);
			setImage(img => happyCat2);
		}
		if (isCorrect === false){
			setImage(img => angryCat);
			setWords(words => "Anwser: Wrong!");
		}
		

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length){
			setCurrentQuestion(nextQuestion);
		}
		else{
			setShowScore(true);
			setImage(img => psychedCat);
			setWords(words => "");
		}
		
	}
	return (
		<div className='app'>
			<div className= 'textbox-section'>
					 {words}
			</div>
			<img src = {image} alt = "image" className = "catImage" width = "200" height = "200"/>
			{showScore? (
				<div className='score-section'> Final Score: {score} / {questions.length}
					<br/>You've earned {score*10} gotcha points for your tamagotchi!
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1} </span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick= {() => handleAnswerButtonClick(answerOption.isCorrect)}> {answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}
