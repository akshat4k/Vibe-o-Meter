
import React, { useState } from 'react';
import { questions, results, Option } from '../data/quizData';
import Question from './Question';
import ProgressBar from './ProgressBar';
import Result from './Result';

interface Scores {
  [key: string]: number;
}

const QuizContainer = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({
    zen: 0,
    chill: 0,
    chaotic: 0,
    mainCharacter: 0
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [resultType, setResultType] = useState<string | null>(null);

  const handleSelectOption = (option: Option) => {
    // Update scores
    const newScores = { ...scores };
    
    Object.entries(option.scores).forEach(([vibeType, score]) => {
      newScores[vibeType] = (newScores[vibeType] || 0) + score;
    });
    
    setScores(newScores);
    
    // Move to next question or complete the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeQuiz(newScores);
    }
  };

  const completeQuiz = (finalScores: Scores) => {
    // Find the vibe type with the highest score
    let maxScore = 0;
    let maxType = "";
    
    Object.entries(finalScores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxType = type;
      }
    });
    
    setResultType(maxType);
    setQuizCompleted(true);
  };

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setScores({
      zen: 0,
      chill: 0,
      chaotic: 0,
      mainCharacter: 0
    });
    setQuizCompleted(false);
    setResultType(null);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-6">
      {!quizCompleted ? (
        <>
          <ProgressBar 
            currentQuestion={currentQuestionIndex + 1} 
            totalQuestions={questions.length} 
          />
          <Question 
            question={questions[currentQuestionIndex]} 
            onSelectOption={handleSelectOption} 
          />
        </>
      ) : (
        resultType && <Result result={results[resultType]} onRetake={retakeQuiz} />
      )}
    </div>
  );
};

export default QuizContainer;
