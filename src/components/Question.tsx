
import React from 'react';
import { Question as QuestionType, Option } from '../data/quizData';

interface QuestionProps {
  question: QuestionType;
  onSelectOption: (option: Option) => void;
}

const Question = ({ question, onSelectOption }: QuestionProps) => {
  return (
    <div className="fade-in w-full max-w-lg mx-auto">
      <h3 className="text-xl font-bold mb-6 text-center">{question.text}</h3>
      <div className="flex flex-col space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 text-left vibe-hover"
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
