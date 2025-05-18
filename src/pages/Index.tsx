
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuizContainer from '@/components/QuizContainer';
import { Toaster } from "sonner";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <Toaster position="top-center" />
      <div className="container px-4 mx-auto">
        {!quizStarted ? (
          <div className="text-center max-w-lg mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-transparent bg-clip-text">
              Vibe Check 🌀
            </h1>
            <div className="vibe-gradient p-0.5 rounded-2xl mb-8">
              <div className="bg-white rounded-2xl p-6">
                <p className="text-lg mb-6">
                  Curious about your current energy? Take this quick quiz to discover your vibe and share it with friends!
                </p>
                <Button 
                  onClick={() => setQuizStarted(true)}
                  className="vibe-gradient text-white font-semibold text-lg py-6 px-8 rounded-xl vibe-shadow vibe-hover"
                >
                  Start Quiz
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-8">
              Discover if you're radiating Zen Master, Chill Vibes, Chaos Gremlin, or Main Character Energy!
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <QuizContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
